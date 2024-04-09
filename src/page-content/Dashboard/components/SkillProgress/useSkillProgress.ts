import { useState } from 'react';

const useSkillProgress = () => {
  const [value, setValue] = useState('week');

  const onChange = (_: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
  return { value, onChange };
};

export default useSkillProgress;
