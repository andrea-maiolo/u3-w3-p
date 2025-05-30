import { SET_ALBUM_ARRAY } from "../actions";

const initialState = {
  content: [],
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM_ARRAY:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default albumReducer;
