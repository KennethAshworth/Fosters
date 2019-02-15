// IMPORT PACKAGE REFERENCES

import React from 'react';
import { NavLink } from 'react-router-dom';

// COMPONENT

export const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light alert-dark navbar-color">
        <a className="navbar-brand" href="/">
            <i className="fas fa-paw fa-2x" style={{color: 'purple'}}></i>
        </a>

        <span className="brand-name">
            Fosters
        </span>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item purple-text">
                    <div className="nav-link">
                        <NavLink to='/' activeClassName='menu selected' exact={true}>Home</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link purple-text">
                        <NavLink to='/faq' activeClassName='menu selected'>FAQ</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link purple-text">
                        <NavLink to='/contact' activeClassName='menu selected'>Contact</NavLink>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
);