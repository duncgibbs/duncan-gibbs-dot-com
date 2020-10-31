import React from 'react';
import { NavLink } from 'react-router-dom';
import Code from '../pages/Code/Code';

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
                <NavLink className='text-link' to='/'>Duncan Gibbs</NavLink>
            </div>
            <ul className='page-links' hidden={condensed}>
                <li><NavLink className='text-link' to='/about'>About</NavLink></li>
                <li><NavLink className='text-link' to='/writing'>Writing</NavLink></li>
                <li><NavLink className='text-link' to='/games'>Games</NavLink></li>
                <li><NavLink className='text-link' to='/podcasts'>Podcasts</NavLink></li>
                <li><Code /></li>
                <li><NavLink className='text-link' to='/photos'>Photography</NavLink></li>
            </ul>
        </div>
    );
}
