// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { FosterListItem } from './FosterListItem';


// COMPONENT

const renderList = fosters => (
    <div className="list-group animated fadeIn">
        {fosters.map(foster => renderListItem(foster))}
    </div>
);

const renderListItem = foster => (
    <Fragment key={foster._id}>
        <FosterListItem 
            name={foster.name} 
            story={foster.story} 
            avatar={foster.avatar} 
            adopted={foster.adopted} 
            id={foster._id} />
    </Fragment>
);




const FosterList = (props) => (
    <Fragment>
        {renderList(props.fosters)}
    </Fragment>
);

FosterList.propTypes = {
    fosters: PropTypes.array.isRequired
};

export { FosterList };