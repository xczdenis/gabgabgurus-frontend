import { TCountry, THobby, TLanguage } from '@/lib/types/refs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISearchFiltersState {
  speaksLanguages: TLanguage[];
  learningLanguages: TLanguage[];
  countries: TCountry[];
  hobbies: THobby[];
  sidebarIsOpen: boolean;
}

export const initialState: ISearchFiltersState = {
  speaksLanguages: [],
  learningLanguages: [],
  countries: [],
  hobbies: [],
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
  setHobbies: (state: ISearchFiltersState, action: PayloadAction<THobby[]>) => {
    state.hobbies = action.payload;
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
