export const SET_ALBUM_ARRAY = "SET_ALBUM_ARRAY";

export const getAlbumsAction = (endpoint) => {
  return async (dispatch, getState) => {
    // per loading
    // dispatch({ type: SET_BOOKS_LOADING_ON });

    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: SET_ALBUM_ARRAY, payload: data.data });
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
