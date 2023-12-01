'use client';

import { TSearchParams } from '@/app/(public)/search/types';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { useIsBreakpointUp } from '@/lib/hooks/use-is-breakpoint-up';
import { buildUrl } from '@/lib/utils/build-url';
import { thunks } from '@/store/thunks/search-filters';
import { urls } from '@/urls';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

export const FilterSidebarSearchButton = () => {
  const state = useAppSelector((state) => state.searchFilters);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const lgUp = useIsBreakpointUp('lg');

  const handleClick = () => {
    if (!lgUp && state.sidebarIsOpen) {
      dispatch(thunks.setSidebarIsOpen(false));
    }
    router.push(buildSearchUrl());
  };

  const buildSearchUrl = () => {
    const query: TSearchParams = {};
    if (state.learningLanguages.length > 0) {
      query.learning = encodeURIComponent(JSON.stringify(state.learningLanguages));
    }
    if (state.speaksLanguages.length > 0) {
      query.speaks = encodeURIComponent(JSON.stringify(state.speaksLanguages));
    }
    if (state.countries.length > 0) {
      query.countries = encodeURIComponent(JSON.stringify(state.countries));
    }
    if (state.hobbies.length > 0) {
      query.hobbies = encodeURIComponent(JSON.stringify(state.hobbies));
    }
    return buildUrl(urls.search, { query });
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Search
    </Button>
  );
};
