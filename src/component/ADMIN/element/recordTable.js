import React, { Component } from 'react';

class recordTable extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.idCart}</td>
                <td>{this.props.idUser}</td>
                <td>{this.props.total}</td>
                <td>{this.props.time}</td>
                <td>
                <img  src={process.env.PUBLIC_URL + '/IMG/' +"baseline-delete_sweep-24px.svg"} alt="/"></img>
                <img onMouseEnter={this.props.HoverEnter}  onMouseLeave={this.props.LeaveMouse}  src={process.env.PUBLIC_URL + '/IMG/' +"baseline-play_arrow-24px.svg"} alt="/"></img>
                </td>
            </tr>
        );
    }
}

export default recordTable;