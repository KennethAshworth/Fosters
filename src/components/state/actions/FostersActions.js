import { fetchFosters } from '../../../services/FostersService';

// FETCH ZIPCODES ACTION NAMES

export const FETCH_ZIPCODES = 'FETCH_FOSTER';
export const FETCH_ZIPCODES_PENDING = 'FETCH_FOSTER_PENDING';
export const FETCH_ZIPCODES_FULFILLED = 'FETCH_FOSTERS_FULFILLED';
export const FETCH_ZIPCODES_REJECTED = 'FETCH_FOSTER_REJECTED';


// ACTION GENERATORS

const fetchFostersAction = () => ({
    type: FETCH_ZIPCODES,
    payload: fetchFosters()
});


// EXPORT ACTIONS

export { fetchFostersAction as fetchFosters };