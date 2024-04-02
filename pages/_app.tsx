import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import { AuthGate, HtmlHead, Layout, AuthProvider, StyledToastContainer } from '@/components';
import { theme, createEmotionCache } from '@/constants';
import { useDetectIos } from '@/hooks';
import { initializeStore } from '@/redux/store';
import { setYupLocale } from '@/utils/yup-setup.util';

import type { MyAppProps } from '@/types';

setYupLocale();

function MyApp({ Component, pageProps, emotionCache }: MyAppProps) {
  const styleCache = useMemo(() => emotionCache || createEmotionCache(), [emotionCache]);
  const store = useMemo(() => {
    return initializeStore(pageProps.internal?.initialReduxState);
  }, [pageProps.internal?.initialReduxState]);
  useDetectIos();

  return (
    <Provider store={store}>
      <CacheProvider value={styleCache}>
        <ThemeProvider theme={theme}>
          <HtmlHead {...pageProps.internal?.metaData} />
          <CssBaseline />
          <AuthProvider>
            <AuthGate auth={pageProps.internal?.auth}>
              <Layout layoutType={pageProps.internal?.layout}>
                <Component {...pageProps} />
              </Layout>
            </AuthGate>
            <StyledToastContainer />
          </AuthProvider>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}
export default MyApp;
