import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCountry, TLanguage } from '@/lib/types/info-data';

export interface ISearchFiltersState {
  speaksLanguages: TLanguage[];
  learningLanguages: TLanguage[];
  countries: TCountry[];
  sidebarIsOpen: boolean;
}

export const initialState: ISearchFiltersState = {
  speaksLanguages: [],
  learningLanguages: [],
  countries: [],
  sidebarIsOpen: true,
};

const reducers = {
  setSpeaksLanguages: (state: ISearchFiltersState, action: PayloadAction<TLanguage[]>) => {
    state.speaksLanguages = action.payload;
  },
  setLearningLanguages: (state: ISearchFiltersState, action: PayloadAction<TLanguage[]>) => {
    state.learningLanguages = action.payload;
  },
  setCountries: (state: ISearchFiltersState, action: PayloadAction<TCountry[]>) => {
    state.countries = action.payload;
  },
  setSidebarIsOpen: (state: ISearchFiltersState, action: PayloadAction<boolean>) => {
    state.sidebarIsOpen = action.payload;
  },
  resetAllFilters: () => initialState,
};

export const slice = createSlice({
  name: 'searchFilters',
  initialState,
  reducers,
});

export const { reducer } = slice;
