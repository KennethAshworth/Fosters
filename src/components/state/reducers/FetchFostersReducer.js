import {
    FETCH_FOSTERS_PENDING,
    FETCH_FOSTERS_FULFILLED,
    FETCH_FOSTERS_REJECTED
} from '../actions/FostersActions';


// INITIALIZE STATE

const initialState = {
    fosters: [],
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const FetchFostersReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case FETCH_FOSTERS_PENDING:
            return {
                ...state,
                fosters: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_FOSTERS_FULFILLED:
            return {
                ...state,
                fosters: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_FOSTERS_REJECTED:
            return {
                ...state,
                fosters: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};