import { throttle } from 'lodash';
import { useEffect } from 'react';

type TUseWindowScrollConfig = {
  handler: () => void;
  delay: number;
};

export const useWindowScroll = (config: TUseWindowScrollConfig) => {
  useEffect(() => {
    const { handler, delay } = config;

    const withThrottle = throttle(handler, delay);

    window.addEventListener('scroll', withThrottle);

    return () => {
      window.removeEventListener('scroll', withThrottle);
    };
  }, [config]);
};
