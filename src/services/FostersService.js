// IMPORT DATA FROM STATIC JSON FILE

import fosters from './fosters.json';


// COMPONENT

const simulateError = false;
const latency = 0;

export const fetchFosters = () => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch list of fosters animals');
            } else {
                resolve(fosters);
            }
        }, latency);
    });
};

export const fetchFosterById = (id) => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch foster of id ' + id);
            } else {
                var foster = fosters.find(foster => foster._id == id);
                if (foster == undefined)
                    reject('Failed to fetch foster of id ' + id);
                else
                    resolve(foster);
            }
        }, latency);
    });
};