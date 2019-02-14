// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar } from '../shared/Avatar/Avatar';


// COMPONENT

const Bio = ({foster}) => (
    <div id={'bio-' + foster._id} className="flex-column align-items-start">
        <div id="top-half" style={{background: 'red', height: 200}} className="flex-row align-items-start flex-wrap">
            <div className="flex-row align-items-start" style={{width: 100}}>
                Left Side Column
                <Avatar avatar={foster.avatar}/>
                <Link to={'/applicant/' + foster._id} className='btn btn-primary m-1'>Apply Now</Link>
            </div>
            <div className="flex-column align-items-start" style={{width: 200}}>
                Right Side Column
                <h2>
                    Header
                </h2>
                <p>
                    story area
                </p>
            </div>
        </div>
        <div id="third-quarter" style={{background: 'green', height: 100}} className="flex-row align-items-start">
            <div className="flex-row align-items-center">
                This Block must be centered which hold a list of pictures
                <div> 
                    Pic 1 
                </div>
                <div> 
                    Pic 2 
                </div>
                <div> 
                    Pic 3 
                </div>
            </div>
        </div>
        <div id="fourth-quarter" style={{background: 'pink', height:100}} className="flex-row align-items-start">
            <div className="flex-row align-items-center">
                This Block must be centered with a Video element, if there is a video source
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