import React from 'react';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

import './Back.scss';

type BackProps = {
    text?: string;
    prefix?: JSX.Element;
    destination: string;
};

export default function Back({
    text = 'Back',
    prefix = <FontAwesomeIcon
        icon={faAngleLeft}
        className='back-icon'
    />,
    destination
}: BackProps) {
    return (      
        <div className='back-nav'>
            <Link className='text-link' to={destination}>{prefix}{text}</Link>
        </div>
    );
}
