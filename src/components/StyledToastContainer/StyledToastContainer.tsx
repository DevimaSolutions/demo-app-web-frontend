import { ToastContainer } from 'react-toastify';

import styles from './styles';
import useColorStyles from './useColorStyles';

export const StyledToastContainer = () => {
  const colorStyles = useColorStyles();

  return (
    <ToastContainer
      toastClassName={(context) =>
        `${context?.type === 'error' ? colorStyles.toastError : colorStyles.toastDefault}`
      }
      style={styles.toastContainer}
      toastStyle={styles.toast}
      bodyStyle={styles.toastBody}
      position="top-center"
      closeButton={false}
      hideProgressBar
    />
  );
};

export default StyledToastContainer;
