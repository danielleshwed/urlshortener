import { FETCH_SUCCESS, HANDLE_CHANGE } from './actions';

const initalState = {
  input: '',
  shortUrl: ''
};

function inputReducer(state = initalState, action) {
  switch(action.type) {
    case FETCH_SUCCESS:
      console.log(action.shortUrl)
      return Object.assign({}, state, {
        shortUrl: 'http://' + action.shortUrl
      })
    case HANDLE_CHANGE:
      console.log(action.input)
      return Object.assign({}, state, {
        input: action.input
      })
    default:
      return state;
  }
}

export default inputReducer;
