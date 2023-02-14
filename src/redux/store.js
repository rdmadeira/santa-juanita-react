import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['hiddenComponents'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);
