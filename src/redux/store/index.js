import { combineReducers, configureStore } from "@reduxjs/toolkit";
import albumReducer from "../reducers/albumReducer";
import songReducer from "../reducers/songReducer";
import favReducer from "../reducers/favReducer";
import errorReducer from "../reducers/errorReducer";

const rootReducer = combineReducers({
  album: albumReducer,
  song: songReducer,
  favorite: favReducer,
  error: errorReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
