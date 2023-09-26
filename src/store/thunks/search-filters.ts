import { Dispatch } from 'redux';
import { slice } from '@/store/slices/search-filters';
import { TLanguage } from '@/lib/types/info-data';

const setSpeaksLanguages = (languages: TLanguage[]) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setSpeaksLanguages(languages));
};

const setLearningLanguages = (languages: TLanguage[]) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setLearningLanguages(languages));
};

const setCountries = (languages: TLanguage[]) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setCountries(languages));
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
};
