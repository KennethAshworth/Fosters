// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AvatarWrapper } from '../shared/Images/Avatar';


// COMPONENT

const FosterListItem = ({id, name, story, avatar, adopted}) => (
    <div id={'foster-' + id} className="list-group-item flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
            {
                adopted && 
                <Fragment>
                    {AvatarWrapper(avatar, name)}
                    <span className="text-muted">This kitten has been adopted!</span>
                </Fragment>
                
            }
            {
                !adopted &&
                <Fragment>
                    {AvatarWrapper(avatar, name)}
                    <div className="d-flex flex-grow-1 m-2">
                        <small className="text-muted mx-4 mt-4">{story}</small>
                    </div>
                    <div className="d-flex flex-column m-2">
                        <Link to={'/bio/' + id} className='btn btn-info m-1'>Learn More</Link>
                        <Link to={'/applicant/' + id} className='btn btn-primary m-1'>Apply Now</Link>
                    </div>
                </Fragment>
            }
        </div>
        
    </div>
);

FosterListItem.propTypes = {
    name: PropTypes.string.isRequired,
    story: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    adopted: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
};

export { FosterListItem };