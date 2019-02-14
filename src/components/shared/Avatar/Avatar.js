// IMPORT PACKAGE REFERENCES

import React from 'react';
const imagePath = '../images';


// COMPONENT

const Avatar = avatar => (
    <div className="avatar">
        <img src={imagePath + '/' + avatar} 
            alt={'Picture of ' + name} 
            height="100" 
            width="100" />
    </div>
);

export { Avatar };