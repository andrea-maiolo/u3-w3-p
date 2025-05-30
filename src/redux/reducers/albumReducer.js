import { SET_ALBUM_ARRAY_HIPHOP, SET_ALBUM_ARRAY_POP, SET_ALBUM_ARRAY_ROCK } from "../actions";

const initialState = {
  rock: [],
  pop: [],
  hiphop: [],
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM_ARRAY_ROCK:
      return {
        ...state,
        rock: action.payload,
      };
    case SET_ALBUM_ARRAY_POP:
      return {
        ...state,
        pop: action.payload,
      };
    case SET_ALBUM_ARRAY_HIPHOP:
      return {
        ...state,
        hiphop: action.payload,
      };

    default:
      return state;
  }
};

export default albumReducer;
