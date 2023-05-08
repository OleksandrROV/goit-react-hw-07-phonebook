import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactSlice';
import { filterReducer } from './filterSlice';

const rootReduser = combineReducers({
  filter: filterReducer,
  [contactApi.reducerPath]: contactApi.reducer,
});

const store = configureStore({
  reducer: rootReduser,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

export default store;

// CREATED BY PERSIST

// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const rootReduser = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };

// const persitedReducer = persistReducer(persistConfig, rootReduser);

// const store = configureStore({
//   reducer: persitedReducer,

//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
// export default store;
