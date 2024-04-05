import { rootReducer } from '@/store/root-reducer';
import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
