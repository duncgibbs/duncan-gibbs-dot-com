import React, { useState } from 'react';

import Navigation from '../../navigation/Navigation';
import GameDetail from './GameDetails';

import games from './games.json';
import './Games.scss';

export type Game = {
    id: string;
    name: string;
    description: string;
    file: string;
    logo: string;
    type: string;
};

export default function Games() {
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);

    const getTypes = () => {
        return [...new Set(games.map(game => game.type))];
    };

    const renderGamesForType = (type: string) => {
        return (
            <div className='type-section' key={type}>
                <div className='type-name'><span>{type}</span></div>
                {games.map(game => {
                    if (game.type === type) {
                        return (
                            <div className='game' key={game.id}>
                                <a className='text-link' onClick={() => {setSelectedGame(game)}}>{game.name}</a>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        );
    };

    return (
        <div className='games-container'>
            <Navigation />
            <div className='game-wrapper'>
                <div className='games-list'>
                    {getTypes().map(type => renderGamesForType(type))}
                </div>
                <GameDetail game={selectedGame} />
            </div>
        </div>
    );
}
