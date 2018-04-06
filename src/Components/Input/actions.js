export const FETCH_URL = 'FETCH_URL';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const HANDLE_CHANGE = 'HANDLE_CHANGE';

export function fetchUrl(shortUrl){
  console.log(shortUrl)
  var url = `http://localhost:8080/new/${shortUrl}`;

  return function (dispatch) {
    return fetch(url)
      .then(data => data.json())
      .then(results => {
        dispatch(fetchSuccess(results))
      })
  }
}

export function fetchSuccess(results) {
  return { type: FETCH_SUCCESS, shortUrl: results.short_url }
}

export function handleChange(input) {
  return { type: HANDLE_CHANGE, input: input.target.value }
}
