import { EmotionCache, Options as OptionsOfCreateCache } from '@emotion/cache/dist/emotion-cache.cjs';
import * as React from 'react';

export type TOwnProps = {
  /** This is the options passed to createCache() from 'import createCache from "@emotion/cache"' */
  options: Omit<OptionsOfCreateCache, 'insertionPoint'>;
  /** By default, <CacheProvider /> from 'import { CacheProvider } from "@emotion/react"' */
  CacheProvider?: (props: { value: EmotionCache; children: React.ReactNode }) => React.JSX.Element | null;
  children: React.ReactNode;
};

export type TProps = TOwnProps;
