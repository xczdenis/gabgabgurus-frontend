// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { TCountry, THobby, TLanguage } from '@/lib/types/info-data';
//
// export interface IDataState {
//   languages: TLanguage[];
//   hobbies: THobby[];
//   countries: TCountry[];
// }
//
// export const initialState: IDataState = {
//   languages: [],
//   hobbies: [],
//   countries: [],
// };
//
// const reducers = {
//   setLanguages: (state: IDataState, action: PayloadAction<TLanguage[]>) => {
//     state.languages = action.payload;
//   },
//   removeLanguages: (state: IDataState) => {
//     state.languages = [];
//   },
//   setHobbies: (state: IDataState, action: PayloadAction<THobby[]>) => {
//     state.hobbies = action.payload;
//   },
//   removeHobbies: (state: IDataState) => {
//     state.hobbies = [];
//   },
//   setCountries: (state: IDataState, action: PayloadAction<TCountry[]>) => {
//     state.countries = action.payload;
//   },
//   removeCountries: (state: IDataState) => {
//     state.countries = [];
//   },
//   clearAllData: () => initialState,
// };
//
// export const slice = createSlice({
//   name: 'data',
//   initialState,
//   reducers,
// });
//
// export const { reducer } = slice;
