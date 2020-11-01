import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../navigation/Navigation';
import Post from './Posts/Post';

import posts from './posts.json';
import './Writing.scss';

type WritingProps = {
    match: Record<string, any>;
    location: Record<string, any>;
    history?: Record<string, any>;
};

export default function Writing({
    match,
    location
}: WritingProps) {
    const renderPosts = () => {
        return posts.map((post, idx) => {
            const publishDate = new Date(post.publication_date);
            return [
                <hr key={idx*2} />,
                <div className='post' key={(idx*2)+1}>
                    <div className='title'>
                        <Link className='text-link' to={`${match.path}/${post.id}`}>{post.title}</Link>
                    </div>
                    <div className='date'>
                        <span className='prefix'>Date:</span>
                        {publishDate.toISOString().slice(0,10)}
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
