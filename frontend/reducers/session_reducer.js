import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  ATTEMPTING_LOGIN,
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS
} from "../actions/session_actions";

const _nullUser = Object.freeze({
  id: null,
  attempting_login: false,
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  //  const clonedPrevState = Object.freeze(Object.assign({}, state));
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { id: action.currentUser.id }, { attempting_login: false });
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, _nullUser, {
        message: `You, ${action.user.username}, have successfully logged off! `,
      });
    case CLEAR_SESSION_ERRORS:
      return Object.assign({}, state, {message:null})
    case ATTEMPTING_LOGIN: 
      return Object.assign({}, state, {attempting_login: true})
    case RECEIVE_SESSION_ERRORS: // disable ATTEMPTING_LOGIN 
      return Object.assign({}, state, {attempting_login: false})
    default:
      return state;
  }
};

export default sessionReducer;
