import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Writing from './pages/Writing/Writing';
import Games from './pages/Games/Games';

import './App.scss';

export default function App() {
    return (      
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/about' component={About} />
                    <Route path={['/writing', '/posts']} render={Writing} />
                    <Route path='/games' component={Games} />
                </Switch>
            </div> 
      </BrowserRouter>
    );
}
