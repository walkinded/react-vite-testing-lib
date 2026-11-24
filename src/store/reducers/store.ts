import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});
export const setupStore = (
  preloadedState?: Partial<ReturnType<typeof rootReducer>>,
) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
