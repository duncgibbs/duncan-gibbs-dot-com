import React from 'react';

import Navigation from '../../navigation/Navigation';

import podcasts from './podcasts.json';
import './Podcasts.scss';

export default function Podcasts() {
    const renderPodcasts = () => {
        return podcasts.map(podcast => {
            return (
                <a
                    href={podcast.link}
                    target='_blank'
                    className='text-link podcast'
                    key={podcast.id}
                >
                    <div className='logo'>
                        <img src={podcast.logo} />
                    </div>
                    <div className='title'>
                        {podcast.title}
                    </div>
                    <div className='description'>
                        {podcast.description.split('\n').map((line, idx) => <p key={idx}>{line}</p>)}
                    </div>
                </a>
            );
        });
    };

    return (
        <div className='podcasts-container'>
            <Navigation />
            <div className='podcast-list'>
                {renderPodcasts()}
            </div>
        </div>
    );
}
