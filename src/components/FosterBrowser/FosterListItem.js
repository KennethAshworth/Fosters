// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar } from '../shared/Avatar/Avatar';


// COMPONENT

const FosterListItem = ({id, name, story, avatar, adopted}) => (
    <div id={'foster-' + id} className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
            {
                adopted && 
                <Fragment>
                    {Avatar(avatar)}
                    <span className="text-muted">This kitten has been adopted!</span>
                </Fragment>
            }
            {
                !adopted &&
                <Fragment>
                    {Avatar(avatar)}
                    <small className="text-muted mx-4 mt-4">{story}</small>
                    <div>
                        <Link to={'/bio/' + id} className='btn btn-info m-1'>Learn More</Link>
                        <Link to={'/applicant/' + id} className='btn btn-primary m-1'>Apply Now</Link>
                    </div>
                </Fragment>
            }
        </div>
        <span className="text-muted ml-1">{name}</span>
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