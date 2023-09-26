// import { Dispatch } from 'redux';
// import { dataService } from '@/services';
// import { slice } from '@/store/slices/data';
//
// const fetchLanguages = () => async (dispatch: Dispatch) => {
//   return dataService
//     .getLanguages()
//     .then((languages) => {
//       dispatch(slice.actions.setLanguages(languages));
//       return languages;
//     })
//     .catch((error) => {
//       dispatch(slice.actions.removeLanguages());
//       throw error;
//     });
// };
//
// const fetchHobbies = () => async (dispatch: Dispatch) => {
//   return dataService
//     .getHobbies()
//     .then((hobbies) => {
//       dispatch(slice.actions.setHobbies(hobbies));
//       return hobbies;
//     })
//     .catch((error) => {
//       dispatch(slice.actions.removeHobbies());
//       throw error;
//     });
// };
//
// const fetchCountries = () => async (dispatch: Dispatch) => {
//   return dataService
//     .getCountries()
//     .then((hobbies) => {
//       dispatch(slice.actions.setCountries(hobbies));
//       return hobbies;
//     })
//     .catch((error) => {
//       dispatch(slice.actions.removeCountries());
//       throw error;
//     });
// };
//
// export const thunks = {
//   fetchLanguages,
//   fetchHobbies,
//   fetchCountries,
// };
