// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
const imagePath = '../assets/images';


// COMPONENT

const Avatar = ({avatar}) => (
    <div className="avatar">
        <img src={imagePath + '/' + avatar} 
            alt={'Picture of ' + name} 
            height="100" 
            width="100" />
    </div>
);

const AvatarWrapper = (avatar, name) => (
    <div className="d-flex flex-column align-items-center m-2">
        <Avatar avatar={avatar}/>
        <h4 className="text-muted mt-2">{name}</h4>
    </div>
);

Avatar.propTypes = {
    avatar: PropTypes.string.isRequired,
};

export { Avatar, AvatarWrapper };