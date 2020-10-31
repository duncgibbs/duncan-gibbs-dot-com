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
            <ul className='page-links' hidden={condensed}>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/writing">Writing</NavLink></li>
                <li><NavLink to="/games">Games</NavLink></li>
            </ul>
        </div>
    );
}
