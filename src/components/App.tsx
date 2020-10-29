import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';

import './App.scss';

export default function App() {
    return (      
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div> 
      </BrowserRouter>
    );
}
