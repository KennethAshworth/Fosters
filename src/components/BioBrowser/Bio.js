// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar, AvatarWrapper } from '../shared/Images/Avatar';

const moviePath = '../../assets/movies';


// COMPONENT

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
        
        
        <div id="third-quarter" className="d-flex justify-content-center w-100 mt-4">
            <div className="d-flex flex-wrap justify-content-start w-75">
                <div className="m-4"><Avatar avatar={foster.avatar} /></div>
                <div className="m-4"><Avatar avatar={foster.avatar} /></div>
                <div className="m-4"><Avatar avatar={foster.avatar} /></div>
                <div className="m-4"><Avatar avatar={foster.avatar} /></div>
                <div className="m-4"><Avatar avatar={foster.avatar} /></div>
                <div className="m-4"><Avatar avatar={foster.avatar} /></div>
                <div className="m-4"><Avatar avatar={foster.avatar} /></div>
                <div className="m-4"><Avatar avatar={foster.avatar} /></div>
            </div>
        </div>
        <div id="fourth-quarter" className="d-flex justify-content-center w-100 mt-4">
            <div>
                <video width="480" height="360" controls>
                    <source src={moviePath + '/' + foster.movie} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
);

// "name" : "Wolfie", 
// "age" : "6 weeks", 
// "color" : "tabby", 
// "city" : "Dallas", 
// "state" : "TX",
// "areaDetails" : "North DFW near Addison at Belt Line and DNT",
// "bio": "Hi my name is Wolfie, im a tough cookie who loves to play with my little brother Boulder. We tumble and play all day and love to snuggle in the evenings will you take me home?",
// "avatar": "wolfie_main_pic.jpg",
// "adopted": false,
// "_id" : "01002" 

Bio.propTypes = {
    foster: PropTypes.object.isRequired,
};

export { Bio };