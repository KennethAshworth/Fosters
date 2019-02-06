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

export const fetchBio = (id) => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch bio of foster id ' + id);
            } else {
                var bio = fosters.find(bio => bio._id == id);
                if (bio == undefined)
                    reject('Failed to fetch bio of foster id ' + id);
                else
                    resolve(bio);
            }
        }, 1000);
    });
};