import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from 'react-redux'

class recordUser extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.idUser}</td>
                <td>{this.props.email}</td>
                <td>{this.props.password}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.address}</td>
                <td>
                    <img src={process.env.PUBLIC_URL + '/IMG/' + "baseline-delete_sweep-24px.svg"} alt="/"></img>
                    <Link to={"/admin/editUser/" + this.props.idUser}><img src={process.env.PUBLIC_URL + '/IMG/' + "baseline-create-24px.svg"} alt="/"></img></Link>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listproHot: state.ProductReducer,
        acountReducer: state.AcountReducer,
        localStorage: state.LocalStorage
    }
}


export default connect(mapStateToProps)(recordUser);