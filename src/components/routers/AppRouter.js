// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { HomePage } from '../pages/HomePage';
import { FaqPage } from '../pages/FaqPage';
import { ContactPage } from '../pages/ContactPage';
import { ApplicantPage } from '../pages/ApplicantPage';
import { BioPage } from '../pages/BioPage';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/faq' component={FaqPage} />
                <Route path='/contact' component={ContactPage} />
                <Route path='/applicant/:id' component={ApplicantPage} />
                <Route path='/bio/:id' component={BioPage} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);