// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { fetchBio } from '../state/actions/BioActions';
import { Bio } from './Bio';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';


// COMPONENT

class BioBrowser extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchBio(id);
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && <Bio bio={this.props.bio} />
                }
                {
                    <LoadingIndicator busy={this.props.fetching} />
                }
                {
                    this.props.failed && <Error message={'Failed to fetch bio with foster id of ' + this.props.match.params.id} />
                }
            </div>
        );
    }
}

BioBrowser.propTypes = {
    fetchBio: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    bio: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    params: PropTypes.object,
    id: PropTypes.number,
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, fetched, failed, bio } = state.bio;

    return { fetching, fetched, failed, bio };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchBio }, dispatch)
);

// withRouter should go around the component that handles the shouldComponentUpdate lifecycle method 
// which is handled via redux connect's higher order component.
const hoc = withRouter(connect(mapStateToProps, mapDispatchToProps)(BioBrowser));

// EXPORT COMPONENT

export { hoc as BioBrowser };