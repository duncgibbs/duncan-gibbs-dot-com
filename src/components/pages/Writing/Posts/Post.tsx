import React from 'react';

import JupyterNotebookPost from './JupyterNotebookPost'

type Post = {
    title: string;
    description: string;
    publication_date: string;
    file: string;
    id: string;
    type: string;
};

type PostProps = {
    post: Post | undefined;
};

export default function Post({
    post
}: PostProps) {
    if (post) {
        switch (post.type) {
            case 'jupyter-notebook':
                return <JupyterNotebookPost filePath={post.file} />;
            default:
                // TODO: handle errors
                return null;
        }
    } else {
        return null;
    }
}
