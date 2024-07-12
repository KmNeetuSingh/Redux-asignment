import { FETCH_COFFEE_REQUEST, FETCH_COFFEE_SUCCESS, FETCH_COFFEE_FAILURE } from './actions';

const initialState = {
    loading: false,
    coffeeList: [],
    error: '',
};

const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COFFEE_REQUEST:
            return { ...state, loading: true };
        case FETCH_COFFEE_SUCCESS:
            return { loading: false, coffeeList: action.payload, error: '' };
        case FETCH_COFFEE_FAILURE:
            return { loading: false, coffeeList: [], error: action.payload };
        default:
            return state;
    }
};

export default coffeeReducer;
