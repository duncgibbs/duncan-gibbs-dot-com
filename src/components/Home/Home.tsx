import React from 'react';
import { NavLink } from 'react-router-dom';

// interface HomeProps {
//   name: string;
// }

export default function Home() {
    return (
        <div>
            <div>Home</div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
}
