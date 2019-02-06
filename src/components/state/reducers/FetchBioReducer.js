import {
    FETCH_BIO_PENDING,
    FETCH_BIO_FULFILLED,
    FETCH_BIO_REJECTED
} from '../actions/BioActions';


// INITIALIZE STATE

const initialState = {
    bio: {},
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
                bio: {},
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_BIO_FULFILLED:
            return {
                ...state,
                bio: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_BIO_REJECTED:
            return {
                ...state,
                bio: {},
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};