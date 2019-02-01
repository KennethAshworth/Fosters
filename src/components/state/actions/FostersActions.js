import { fetchFosters } from '../../../services/FostersService';

// FETCH FOSTERS ACTION NAMES

export const FETCH_FOSTERS = 'FETCH_FOSTERS';
export const FETCH_FOSTERS_PENDING = 'FETCH_FOSTERS_PENDING';
export const FETCH_FOSTERS_FULFILLED = 'FETCH_FOSTERS_FULFILLED';
export const FETCH_FOSTERS_REJECTED = 'FETCH_FOSTERS_REJECTED';


// ACTION GENERATORS

const fetchFostersAction = () => ({
    type: FETCH_FOSTERS,
    payload: fetchFosters()
});


// EXPORT ACTIONS

export { fetchFostersAction as fetchFosters };