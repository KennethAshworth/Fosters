// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES

import { fetchFosters } from '../state/actions/FostersActions';
import { FosterList } from './FosterList';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';


// COMPONENT

class FosterBrowser extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFosters();
    }

    render() {
        return (
            <div>
                {
                    this.props.fetched && <FosterList fosters={this.props.fosters} />
                }
                {
                    <LoadingIndicator busy={this.props.fetching} />
                }
                {
                    this.props.failed && <Error message="Failed to fetch list of foster animals" />
                }
            </div>
        );
    }
}

FosterBrowser.propTypes = {
    fetchFosters: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    fosters: PropTypes.array.isRequired
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, fetched, failed, fosters } = state.fosters;

    return { fetching, fetched, failed, fosters };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchFosters }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(FosterBrowser);


// EXPORT COMPONENT

export { hoc as FosterBrowser };