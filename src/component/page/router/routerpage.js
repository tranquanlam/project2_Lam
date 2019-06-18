import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from '../home/home'
import LoginPage from '../login/login'

class routerpage extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" component={LoginPage} />
            </div>
        );
    }
}

export default routerpage;