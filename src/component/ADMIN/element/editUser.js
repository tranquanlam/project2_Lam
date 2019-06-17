import React, { Component } from 'react';
import Sidebar from '../sidebar'
import axios from 'axios'
import Redirect from 'react-router-dom/Redirect'
import { connect } from 'react-redux'

class editUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtEmail: '',
            txtPassword: '',
            txtName: '',
            txtphone: '',
            txtAdrress: '',
            listUser: [],
            isHasToPage : false
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    editUser = async (id) => {
        const user = {
            email: this.state.txtEmail,
            name: this.state.txtName,
            phone: this.state.txtphone,
            password :this.state.txtPassword,
            address : this.state.txtAdrress
          }
          this.setState({
            isHasToPage :true
          })
          axios.put(`http://5d08a7b5034e5000140106c4.mockapi.io/api/user/${id}`, { ...user })
    }
    async componentDidMount() {
        this.props.acountReducer.listUser.forEach(element => {
            if (parseInt(element.id) === parseInt(this.props.match.params.id)) {
                this.setState({
                    txtName: element.name,
                    txtEmail: element.email,
                    txtPassword: element.password,
                    txtAdrress: element.address,
                    txtphone: element.phone,
                    user: element
                })
            }
        });
        this.setState({
            listUser: this.props.acountReducer.listUser
        })
    }
    render() {
        if(this.state.isHasToPage === true){
            return <Redirect to='/admin/table'></Redirect>
        }
        var user = this.state.user
        if (!user) user = null
        return (
            <div className="page-wrapper chiller-theme toggled">
                <Sidebar></Sidebar>
                <div className="page-content">
                    <h1>Sửa người dùng</h1>
                    <form >
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input name="txtEmail" type="email" className="form-control" defaultValue={this.state.txtEmail} onChange={(event) => this.handleChange(event)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input name="txtPassword" type="password" className="form-control" defaultValue={this.state.txtPassword} onChange={(event) => this.handleChange(event)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Name :</label>
                            <input name="txtName" type="text" className="form-control" defaultValue={this.state.txtName} onChange={(event) => this.handleChange(event)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Phone :</label>
                            <input name="txtphone" type="text" className="form-control" defaultValue={this.state.txtphone} onChange={(event) => this.handleChange(event)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Adrress :</label>
                            <input name="txtAdrress" type="text" className="form-control" defaultValue={this.state.txtAdrress} onChange={(event) => this.handleChange(event)} />
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" /> Remember me</label>
                        </div>
                        <div onClick={() => this.editUser(user.id)} className="btn btn-default">Submit</div>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        acountReducer: state.AcountReducer,
    }
}
export default connect(mapStateToProps) (editUser);