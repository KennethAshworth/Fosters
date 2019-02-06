// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchFostersReducer } from './FetchFostersReducer';
import { FetchBioReducer } from './FetchBioReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    fosters: FetchFostersReducer,
    bio: FetchBioReducer,
});