import { combineReducers, configureStore } from "@reduxjs/toolkit";
import albumReducer from "../reducers/albumReducer";
import songReducer from "../reducers/songReducer";

const rootReducer = combineReducers({
  album: albumReducer,
  song: songReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
