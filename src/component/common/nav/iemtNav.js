import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class iemtNav extends Component {
    render() {
        return (
            <li className="nav-item">
                <Link className="nav-link" to = "/">{this.props.title} </Link>
            </li>
        );
    }
}
export default iemtNav;