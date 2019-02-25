// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
const imagePath = '../assets/images';


// COMPONENT

const Thumbnail = ({text, path, id}) => (
    <div id={'thumbnail_' + id} className="thumbnail">
        <img src={imagePath + '/' + path} 
            alt={text} 
            height="150" 
            width="150" />
    </div>
);

Thumbnail.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export { Thumbnail };