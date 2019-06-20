import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from '../home/home'
import LoginPage from '../login/login'
import SiginPage from '../sigin/sigin'

class routerpage extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/sigin" component={SiginPage} />
            </div>
        );
    }
}

export default routerpage;