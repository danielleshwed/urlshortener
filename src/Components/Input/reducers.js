import { FETCH_SUCCESS, HANDLE_CHANGE, UPDATE_USER_DETAILS } from './actions';

const initalState = {
  input: '',
  shortUrl: '',
  clicks: 0,
  details: [],
  showButton: false
};

function inputReducer(state = initalState, action) {
  switch(action.type) {
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        shortUrl: 'http://' + action.shortUrl,
        showButton: true
      })
    case HANDLE_CHANGE:
      return Object.assign({}, state, {
        input: action.input
      })
    case UPDATE_USER_DETAILS:
      var newState = state.details
      return Object.assign({}, state, {
        clicks: state.clicks + 1,
        details: newState.concat(action.details)
      })
    default:
      return state;
  }
}

export default inputReducer;
