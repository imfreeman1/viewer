import { combineReducers, configureStore } from '@reduxjs/toolkit';
import galleryReducer from './gallery/galleryReducer';

const rootReducer = combineReducers({
  galleryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
