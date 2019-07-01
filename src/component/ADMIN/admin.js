import React, { Component } from 'react';
import SideBar from './sidebar'
import { BrowserRouter as Router } from "react-router-dom";
import RouterMyAdmin from './routerAdmin'

class admin extends Component {
  render() {
    return (
      <div className="page-wrapper chiller-theme toggled">
        <a id="show-sidebar" className="btn btn-sm btn-dark" href="/">
          <i className="fas fa-bars" />
        </a>
        <Router >
          <SideBar></SideBar>
          <RouterMyAdmin></RouterMyAdmin>
        </Router>
      </div>
    );
  }
}

export default admin;