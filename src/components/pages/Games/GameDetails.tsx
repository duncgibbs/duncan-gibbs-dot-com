import React from 'react';

import { Game } from './Games';

type GameDetailProps = {
    game: Game | null;
};

export default function GameDetail({
    game
}: GameDetailProps) {
    if (game) {
        return (
            <div className='game-details'>
                <div className='logo'>
                    <img src={game.logo} />
                </div>
                <div className='title'>
                    {game.name}
                </div>
                <div className='description'>
                    {game.description.split('\n').map(line => <p>{line}</p>)}
                </div>
                <div className='download'>
                    <a className='text-link' href={game.file} download >Download PDF</a>
                </div>
            </div>
        );
    } else {
        return null;
    }
}
