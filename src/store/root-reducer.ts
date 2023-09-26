import { combineReducers } from '@reduxjs/toolkit';
import { reducer as authReducer } from './slices/auth';
import { reducer as chatReducer } from './slices/chat';
// import { reducer as dataReducer } from './slices/data';
import { reducer as notificationsReducer } from './slices/notifications';
import { reducer as searchFiltersReducer } from './slices/search-filters';

export const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  // data: dataReducer,
  notifications: notificationsReducer,
  searchFilters: searchFiltersReducer,
});
