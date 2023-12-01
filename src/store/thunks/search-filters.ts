import { TCountry, THobby, TLanguage } from '@/lib/types/refs';
import { slice } from '@/store/slices/search-filters';
import { Dispatch } from 'redux';

const setSpeaksLanguages = (languages: TLanguage[]) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setSpeaksLanguages(languages));
};

const setLearningLanguages = (languages: TLanguage[]) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setLearningLanguages(languages));
};

const setCountries = (countries: TCountry[]) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setCountries(countries));
};

const setHobbies = (hobbies: THobby[]) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setHobbies(hobbies));
};

const setSidebarIsOpen = (isOpen: boolean) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setSidebarIsOpen(isOpen));
};

const resetAllFilters = () => async (dispatch: Dispatch) => {
  dispatch(slice.actions.resetAllFilters());
};

export const thunks = {
  setSpeaksLanguages,
  setLearningLanguages,
  setSidebarIsOpen,
  resetAllFilters,
  setCountries,
  setHobbies,
};
