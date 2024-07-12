import axios from 'axios';

export const FETCH_COFFEE_REQUEST = 'FETCH_COFFEE_REQUEST';
export const FETCH_COFFEE_SUCCESS = 'FETCH_COFFEE_SUCCESS';
export const FETCH_COFFEE_FAILURE = 'FETCH_COFFEE_FAILURE';

export const fetchCoffeeRequest = () => ({ type: FETCH_COFFEE_REQUEST });
export const fetchCoffeeSuccess = (coffee) => ({ type: FETCH_COFFEE_SUCCESS, payload: coffee });
export const fetchCoffeeFailure = (error) => ({ type: FETCH_COFFEE_FAILURE, payload: error });

export const fetchCoffee = () => {
    return async (dispatch) => {
        dispatch(fetchCoffeeRequest());
        try {
            const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee');
            dispatch(fetchCoffeeSuccess(response.data.data));
        } catch (error) {
            dispatch(fetchCoffeeFailure(error.message));
        }
    };
};
