export const SET_ALBUM_ARRAY_ROCK = "SET_ALBUM_ARRAY_ROCK";
export const SET_ALBUM_ARRAY_POP = "SET_ALBUM_ARRAY_POP";
export const SET_ALBUM_ARRAY_HIPHOP = "SET_ALBUM_ARRAY_HIPHOP";
export const SET_CURRENTLY_PLAYING = "SET_CURRENTLY_PLAYING";
export const SET_FAV = "SET_FAV";
export const DELETE_FROM_FAV = "DELETE_FROM_FAV";

export const setSongSelected = (obj) => ({ type: SET_CURRENTLY_PLAYING, payload: obj });
export const setToFavAction = (song) => ({ type: SET_FAV, payload: song });
export const deleteFromListAction = (i) => ({ type: DELETE_FROM_FAV, payload: i });

export const getAlbumsAction = (endpoint, correctArray) => {
  return async (dispatch, getState) => {
    // per loading
    // dispatch({ type: SET_BOOKS_LOADING_ON });

    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: `SET_ALBUM_ARRAY_${correctArray}`, payload: data.data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }

    // gestion errori
    //       dispatch({ type: HAS_ERROR_ON });
    //       dispatch({ type: SET_ERROR_MESSAGE, payload: error.message });

    // gestione finale loading
    //     } finally {
    //       dispatch({ type: SET_BOOKS_LOADING_OFF });
    //     }
  };
};
