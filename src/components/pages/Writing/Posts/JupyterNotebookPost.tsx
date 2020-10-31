import React, { useState, useEffect } from 'react';

import Navigation from '../../../navigation/Navigation';
import Back from '../../../navigation/Back';

import './JupyterNotebookPost.scss';

type JupyterNotebookPostProps = {
    filePath: string;
};

export default function JupyterNotebookPost({
    filePath
}: JupyterNotebookPostProps) {
    const [postHtml, setPostHtml] = useState('<div class=\'lds-ring\'><div></div><div></div><div></div><div></div></div>');
    const [loading, setLoading] = useState(true);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setScrollTop(window.scrollY);
        };
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollTop]);

    fetch(filePath)
        .then(response => response.text())
        .then(htmlFile => {
            setPostHtml(htmlFile);
            setLoading(false);
        });

    return (      
        <div className={`post-container`}>
            <div className={`jupyter-nav ${scrollTop > 140 ? '' : 'top'}`}>
                <Navigation />
                <Back text='Writing' destination='/writing' />
            </div>
            <div
                className={`notebook-container ${loading ? 'loading': ''}`}
                dangerouslySetInnerHTML={{__html: postHtml}}
            ></div>
        </div>
    );
}
