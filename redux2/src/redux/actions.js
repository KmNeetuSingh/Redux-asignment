// actions.js

export const FETCH_MATCHES_REQUEST = 'FETCH_MATCHES_REQUEST';
export const FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS';
export const FETCH_MATCHES_FAILURE = 'FETCH_MATCHES_FAILURE';

export const fetchMatchesRequest = () => ({ type: FETCH_MATCHES_REQUEST });
export const fetchMatchesSuccess = (matches) => ({ type: FETCH_MATCHES_SUCCESS, payload: matches });
export const fetchMatchesFailure = (error) => ({ type: FETCH_MATCHES_FAILURE, payload: error });
