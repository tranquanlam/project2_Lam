import React, { Component } from 'react';
import Sidebar from '../sidebar'

class addUser extends Component {
    render() {
        return (
            <div className="page-wrapper chiller-theme toggled">
                <Sidebar></Sidebar>
                <div className="page-content">
                    <h1>Thêm người dùng</h1>
                <form action="/action_page.php">
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Name :</label>
                        <input type="text" className="form-control" id="pwd" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Phone :</label>
                        <input type="text" className="form-control" id="pwd" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Adrress :</label>
                        <input type="text" className="form-control" id="pwd" />
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" /> Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
                </div>
            </div>
        );
    }
}

export default addUser;