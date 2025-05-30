import { combineReducers, configureStore } from "@reduxjs/toolkit";
import albumReducer from "../reducers/albumReducer";
import songReducer from "../reducers/songReducer";
import favReducer from "../reducers/favReducer";

const rootReducer = combineReducers({
  album: albumReducer,
  song: songReducer,
  favorite: favReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
