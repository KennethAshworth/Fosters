// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AvatarWrapper } from '../shared/Images/Avatar';
import { Thumbnail } from '../shared/Images/Thumbnail';

const moviePath = '../../assets/movies';


// COMPONENT

const renderThumbnailList = images => (
    <div className="d-flex flex-wrap justify-content-center w-75">
        {images.map(image => renderThumbnailItem(image))}
    </div>
);

const renderThumbnailItem = image => (
    <Fragment key={image._id}>
        <div className="m-4">
            <Thumbnail 
                text={image.text} 
                path={image.path} 
                id={image._id} />
        </div>
    </Fragment>
);



const Bio = ({foster}) => (
    <div id={'bio-' + foster._id} className="list-group-item d-flex flex-column align-items-start">
        <div id="bio-header" className="d-flex justify-content-center w-100">
            <h2>Biography</h2>
        </div>
        <div id="top-half" className="d-flex align-items-start">
            <div className="d-flex flex-column mr-2">
                {AvatarWrapper(foster.avatar, foster.name)}
                <Link to={'/applicant/' + foster._id} className='btn btn-primary m-1'>Apply Now</Link>
            </div>
            <div className="d-flex flex-column align-items-center">
                <p className="mb-4 mt-2 mx-4" dangerouslySetInnerHTML={{__html: foster.story}} />
            </div>
        </div>
        <hr/>        
        <div id="third-quarter" className="d-flex justify-content-center w-100">
            <div className="d-flex justify-content-center animated fadeIn">
                {renderThumbnailList(foster.images)}
            </div>
        </div>
        <hr/>
        <div id="fourth-quarter" className="d-flex justify-content-center w-100">
            <div>
                <video width="480" height="360" controls>
                    <source src={moviePath + '/' + foster.movie} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
);

Bio.propTypes = {
    foster: PropTypes.object.isRequired,
};

export { Bio };