import useOnboarding from './useOnboarding';

const Onboarding = () => {
  const { component: Component } = useOnboarding();
  return <Component />;
};

export default Onboarding;
