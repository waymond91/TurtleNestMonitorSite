import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import graphDataSlice from './reducers/graphDataSlice';
import divesSlice from './reducers/divesSlice';
import sessionSlice from './reducers/sessionSlice';
import authSlice from './reducers/authSlice';
import nestRecentSlice from "./reducers/nestRecentSlice";
import nestHistorySlice from "./reducers/nestHistorySlice";
import nestGraphSlice from "./reducers/nestGraphSlice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'dives', 'session', 'graphData']
};

const rootReducer = combineReducers({
  graphData: graphDataSlice,
  dives: divesSlice,
  session: sessionSlice,
  auth: authSlice,
  nestRecent: nestRecentSlice,
  nestHistory: nestHistorySlice,
  nestGraph: nestGraphSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
