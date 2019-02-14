import {
    FETCH_BIO_PENDING,
    FETCH_BIO_FULFILLED,
    FETCH_BIO_REJECTED
} from '../actions/BioActions';


// INITIALIZE STATE

const initialState = {
    foster: {},
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const FetchBioReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BIO_PENDING:
            return {
                ...state,
                foster: {},
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_BIO_FULFILLED:
            //console.log(action.payload);
            return {
                ...state,
                foster: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_BIO_REJECTED:
            return {
                ...state,
                foster: {},
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};