import { SET_CURRENTLY_PLAYING } from "../actions";

const initialState = {
  currentlyPlaying: null,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENTLY_PLAYING:
      return {
        ...state,
        currentlyPlaying: action.payload,
      };

    default:
      return state;
  }
};

export default songReducer;
