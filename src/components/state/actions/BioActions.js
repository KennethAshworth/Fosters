import { fetchFosterById } from '../../../services/FostersService';

// FETCH BIO ACTION NAMES

export const FETCH_BIO = 'FETCH_BIO';
export const FETCH_BIO_PENDING = 'FETCH_BIO_PENDING';
export const FETCH_BIO_FULFILLED = 'FETCH_BIO_FULFILLED';
export const FETCH_BIO_REJECTED = 'FETCH_BIO_REJECTED';


// ACTION GENERATORS

const fetchBioAction = (id) => ({
    type: FETCH_BIO,
    payload: fetchFosterById(id)
});


// EXPORT ACTIONS

export { fetchBioAction as fetchBio };