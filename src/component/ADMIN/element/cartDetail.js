import React, { Component } from 'react';
import RecordTable from './recordTable'

class cartDetail extends Component {
    render() {
        return (
            <tr>
                    <td>{this.props.idProduct}</td>
                    <td>{this.props.NamePro} </td>
                    <td>{this.props.idUser}</td>
                    <td>{this.props.price}</td>
                    <td>{this.props.date}</td>
          
                <td>
                    <img src={process.env.PUBLIC_URL + '/IMG/' + "baseline-delete_sweep-24px.svg"} alt="/"></img>
                    <img onMouseEnter={this.props.HoverEnter} onMouseLeave={this.props.LeaveMouse} src={process.env.PUBLIC_URL + '/IMG/' + "baseline-play_arrow-24px.svg"} alt="/"></img>
                </td>
            </tr>
        );
    }
}

export default cartDetail;