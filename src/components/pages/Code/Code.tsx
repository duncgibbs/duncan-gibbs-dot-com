import React, { useState } from 'react';

export default function Code() {
    const [word, setWord] = useState('Code');
    return (
        <a
            href='https://github.com/duncgibbs'
            target='_blank'
            rel='noopener noreferrer'
            className='text-link'
            onMouseEnter={() => {setWord('GitHub')}}
            onMouseLeave={() => {setWord('Code')}}
        >
            {word}
        </a>
    );
}
