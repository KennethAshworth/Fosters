// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const imagePath = '../../images';

// COMPONENT

const renderAvatarImage = avatar => (
    <div className="avatar">
        <img src={imagePath + '/' + avatar} 
            alt={'Picture of ' + name} 
            height="100" 
            width="100" />
    </div>
);


const FosterListItem = ({id, name, bio, avatar, adopted}) => (
    <a href="#" id={'foster-' + id} className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
            {
                adopted && 
                <Fragment>
                    {renderAvatarImage(avatar)}
                    <span className="text-muted">This kitten has been adopted!</span>
                </Fragment>
            }
            {
                !adopted &&
                <Fragment>
                    {renderAvatarImage(avatar)}
                    <small className="text-muted mx-4 mt-4">{bio}</small>
                    <div>
                        <a href={'/bio/' + id}>
                            <button type="button" className="btn btn-info m-1">Learn More</button>    
                        </a>
                        <a href={'/applicant/' + id}>
                            <button type="button" className="btn btn-primary m-1">Apply Now</button>
                        </a>
                    </div>
                </Fragment>
            }
        </div>
        <span className="text-muted ml-1">{name}</span>
    </a>
);

FosterListItem.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    adopted: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
};

export { FosterListItem };