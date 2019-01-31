// IMPORT DATA FROM STATIC JSON FILE

import fosters from './fosters.json';


// COMPONENT

const simulateError = false;

export const fetchFosters = () => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch list of fosters animals');
            } else {
                resolve(fosters);
            }
        }, 1000);
    });
};