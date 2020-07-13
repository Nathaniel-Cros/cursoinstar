import React, {Component} from 'react';
import './App.css';

import { BrowserRouter, Route } from "react-router-dom";
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import Navbar from './components/Navigation/Navbar';
import NewsFeed from "./containers/NewsFeed";
import Index from "./containers/Profile";
import services from "./services";

interface IApp {
    history: any
}

class App extends Component<IApp> {
    public state = {
        loading: true,
    }
    public componentDidMount() {
        const { auth } = services;
        auth.onAuthStateChanged(user => {
            if ( user ) {
                // eslint-disable-next-line no-restricted-globals
                if( ['/', '/register'].indexOf( location.pathname ) > -1 ) {
                    const { history } = this.props;
                    history.push( '/app/newsfeed' );
                }
            } else {
                // eslint-disable-next-line no-restricted-globals
                if ( ['/app/newsfeed', '/app/profile'].indexOf( location.pathname ) > -1 ) {
                    const { history } = this.props;
                    history.push( '/' );
                }
            }
           this.setState({
               loading: false,
           })
        });
    }

    public render() {
        const { loading } = this.state;
        return (
            loading ? 'Loading' : <BrowserRouter>
                <div>
                    <Route exact path='/' component={ Login } />
                    <Route exact path='/register' component={ Register } />
                    <Route path='/app' component={ Navbar } />
                    <Route exact path='/app/newsfeed' component={ NewsFeed } />
                    <Route exact path='/app/profile' component={ Index } />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
