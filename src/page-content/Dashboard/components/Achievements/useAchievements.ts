import { useState } from 'react';

const useAchievements = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen((prev) => !prev);
  return { isOpen, handleModal };
};

export default useAchievements;
