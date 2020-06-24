import React, {Component} from 'react';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import { Route } from 'react-router';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import NewsFeed from "./containers/NewsFeed";
import Navbar from './components/Navigation/Navbar';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={ Login } />
                    <Route exact path='/register' component={ Register } />
                    <Route path='/app' component={ Navbar } />
                    <Route exact path='/app/newsfeed' component={ NewsFeed} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
