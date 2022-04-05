import { useCallback, useState } from 'react';

export const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onOpenToggle = useCallback(() => {
    setToggle(true);
  }, []);

  const onCloseToggle = useCallback(() => {
    setToggle(false);
  }, []);

  const onToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return {
    toggle,
    onOpenToggle,
    onCloseToggle,
    onToggle,
  };
};
