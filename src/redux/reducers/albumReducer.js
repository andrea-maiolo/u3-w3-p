import { SET_ALBUM_ARRAY_HIPHOP, SET_ALBUM_ARRAY_POP, SET_ALBUM_ARRAY_ROCK, SET_LOADING_OFF, SET_LOADING_ON } from "../actions";

const initialState = {
  rock: [],
  pop: [],
  hiphop: [],
  isLoading: false,
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
    case SET_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case SET_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default albumReducer;
