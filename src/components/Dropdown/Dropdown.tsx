import { useCallback, useRef, useState } from 'react';
import { DropdownContext } from './DropdownContext';

type TDropdownProps = {
  children: React.ReactNode;
  delay?: number;
};

export const Dropdown: React.FC<TDropdownProps> = (props) => {
  const { children, delay = 50 } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const cleanupRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTriggerEnter = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    clearTimeout(cleanupRef.current!);
    setAnchorEl(event.currentTarget);
  }, []);

  const handleTriggerLeave = useCallback(() => {
    cleanupRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, delay);
  }, [delay]);

  const handleMenuEnter = useCallback(() => {
    clearTimeout(cleanupRef.current!);
  }, []);

  const handleMenuLeave = useCallback(() => {
    cleanupRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, delay);
  }, [delay]);

  const open = !!anchorEl;

  return (
    <DropdownContext.Provider
      value={{
        anchorEl,
        onMenuEnter: handleMenuEnter,
        onMenuLeave: handleMenuLeave,
        onTriggerEnter: handleTriggerEnter,
        onTriggerLeave: handleTriggerLeave,
        open,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
