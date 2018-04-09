export const FETCH_URL = 'FETCH_URL';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS';

export function fetchUrl(shortUrl){
  var url = `http://localhost:8080/new/${shortUrl}`;

  return function (dispatch) {
    return fetch(url)
      .then(data => data.json())
      .then(results => {
        dispatch(fetchSuccess(results))
      })
  }
}

export function getUserDetails(){
  var url = `http://localhost:8080/details`;

  return function (dispatch) {
    return fetch(url)
      .then(data => data.json())
      .then(results => {
          dispatch(updateUserDetails(results))
      })
  }
}

export function updateUserDetails(results){
  return { type: UPDATE_USER_DETAILS, details: results }
}

export function fetchSuccess(results) {
  return { type: FETCH_SUCCESS, shortUrl: results.short_url }
}

export function handleChange(input) {
  return { type: HANDLE_CHANGE, input: input.target.value }
}
