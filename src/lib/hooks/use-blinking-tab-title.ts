import { useCallback, useEffect, useRef } from 'react';

export const useBlinkingTabTitle = (interval = 1000) => {
  const intervalId = useRef<number | null>(null);
  const newTitle = useRef('');
  const originalTitle = useRef(document.title);

  const toggleTitle = () => {
    document.title = document.title === newTitle.current ? originalTitle.current : newTitle.current;
  };

  const stopBlinking = useCallback(() => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
      intervalId.current = null;
      document.title = originalTitle.current;
    }
  }, []);

  const startBlinking = useCallback(
    (title: string) => {
      newTitle.current = title;
      if (!intervalId.current) {
        intervalId.current = window.setInterval(toggleTitle, interval);
      }
    },
    [interval]
  );

  useEffect(() => {
    return () => {
      stopBlinking();
    };
  }, [stopBlinking]);

  return { startBlinking, stopBlinking };
};
