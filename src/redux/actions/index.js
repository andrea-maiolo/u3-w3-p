export const SET_ALBUM_ARRAY_ROCK = "SET_ALBUM_ARRAY_ROCK";
export const SET_ALBUM_ARRAY_POP = "SET_ALBUM_ARRAY_POP";
export const SET_ALBUM_ARRAY_HIPHOP = "SET_ALBUM_ARRAY_HIPHOP";
export const SET_CURRENTLY_PLAYING = "SET_CURRENTLY_PLAYING";
export const SET_FAV = "SET_FAV";
export const DELETE_FROM_FAV = "DELETE_FROM_FAV";
export const HAS_ERROR_ON = "HAS_ERROR_ON";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const SET_LOADING_ON = "SET_LOADING_ON";
export const SET_LOADING_OFF = "SET_LOADING_OFF";

export const setSongSelected = (obj) => ({ type: SET_CURRENTLY_PLAYING, payload: obj });
export const setToFavAction = (song) => ({ type: SET_FAV, payload: song });
export const deleteFromListAction = (i) => ({ type: DELETE_FROM_FAV, payload: i });
export const setErrorMessage = (message) => ({ type: SET_ERROR_MESSAGE, payload: message });
export const turnOnOffError = () => ({ type: HAS_ERROR_ON });

export const getAlbumsAction = (endpoint, correctArray) => {
  return async (dispatch, getState) => {
    dispatch({ type: SET_LOADING_ON });
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: `SET_ALBUM_ARRAY_${correctArray}`, payload: data.data });
      } else {
        dispatch({ type: HAS_ERROR_ON });
        dispatch({ type: SET_ERROR_MESSAGE, payload: "Problema nella fetch" });
        throw new Error("Problema nella fetch");
      }
    } catch (error) {
      dispatch({ type: HAS_ERROR_ON });
      dispatch({ type: SET_ERROR_MESSAGE, payload: error.message });
    } finally {
      dispatch({ type: SET_LOADING_OFF });
    }
  };
};
