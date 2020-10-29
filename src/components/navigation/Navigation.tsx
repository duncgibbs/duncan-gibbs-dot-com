import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

type NavigationProps = {
  condensed?: boolean;
}

export default function Navigation({
    condensed = true
}: NavigationProps) {
    return (
        <div className='main-nav'>
            <div className='site-title'>
                <NavLink to="/">Duncan Gibbs</NavLink>
            </div>
            <div className='page-links' hidden={condensed}>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    );
}
