import { SET_UID } from './actions';

const initialState = {
  uid: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_UID:
      return { ...state, uid: action.payload };
    default:
      return state;
  }
}

export default reducer;
