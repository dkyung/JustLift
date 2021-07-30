export const SET_UID = 'SET_UID';

export const setUid = (uid) => (dispatch) => {
  dispatch({
    type: SET_UID,
    payload: uid,
  });
};
