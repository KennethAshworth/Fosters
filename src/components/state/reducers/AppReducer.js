// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchFostersReducer } from '../reducers/FetchFostersReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    fosters: FetchFostersReducer
});