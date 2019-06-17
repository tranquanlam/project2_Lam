import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class recordPro extends Component {
    render() {
        return (
            <tr>
            <td>{this.props.id}</td>
            <td>{this.props.productName}</td>
            <td>{this.props.catagory}</td>
            <td>{this.props.price}</td>
            <td>{this.props.amountbuy}</td>
            <td><img className="img-thumbnail" style={{ width: '50px', height: '50px' }} src={process.env.PUBLIC_URL + '/IMG/' + this.props.imageproduct} alt="/"></img></td>
            <td>
                <img src={process.env.PUBLIC_URL + '/IMG/' + "baseline-delete_sweep-24px.svg"} alt="/"></img>
                <Link to="/admin/editUser"><img src={process.env.PUBLIC_URL + '/IMG/' + "baseline-create-24px.svg"} alt="/"></img></Link>
            </td>
        </tr>
        );
    }
}

export default recordPro;