import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../navigation/Navigation';
import Post from './Posts/Post';

import posts from './posts.json';
import './Writing.scss';

type WritingProps = {
    match: Record<string, any>,
    location: Record<string, any>,
    history?: Record<string, any>
};

export default function Writing({
    match,
    location
}: WritingProps) {
    const renderPosts = () => {
        return posts.map(post => {
            const publish_date = new Date(post.publication_date);
            return [
                <hr />,
                <div className='post'>
                    <div className='title'>
                        <Link to={`${match.path}/${post.id}`}>{post.title}</Link>
                    </div>
                    <div className='date'>
                        <span className='prefix'>Date:</span>
                        {publish_date.toISOString().slice(0,10)}
                    </div>
                    <div className='description'>
                        <span className='prefix'>Description:</span>
                        {post.description}
                    </div>
                </div>
            ];
        });
    };

    const pathSplit: string[] = location.pathname.split('/');

    if (pathSplit.length > 2) {
        const urlPost = posts.find(post => post.id === pathSplit[2]);
        return (
            <Post post={urlPost} />
        );
    } else {
        return (
            <div className='writing-container'>
                <Navigation />
                <div className='posts'>
                    {renderPosts()}
                </div>
            </div>
        );
    }
}
