import React, { Component } from 'react';
import axios from 'axios'
import Redirect from 'react-router-dom/Redirect'
import Contact from '../../common/contact/contact'
import Headers from '../../common/header/header'
import Nav from '../../common/nav/nav'

class sigin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtname: '',
            txtemail: '',
            txtphone: '',
            txtaddress: '',
            txtpassword: '',
            yesNoPagediff: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit = event => {
        event.preventDefault();

        const product = {
            email: this.state.txtemail,
            password: this.state.txtpassword,
            name: this.state.txtname,
            phone: this.state.txtphone,
            address: this.state.txtaddress
        };

        this.setState({
            yesNoPagediff: true
        })
        axios.post(`http://5d08a7b5034e5000140106c4.mockapi.io/api/user`, { ...product })
    }

    render() {
        if (this.state.yesNoPagediff === true) {
            return <Redirect to="/login"></Redirect>
        }
        return (
            <div>
                <Contact></Contact>
                <Headers></Headers>
                <Nav></Nav>
                <div className="containerLogin">
                    <div className="addressLocal"><a className="addressLocal__a" href="/">Home</a><a className="addressLocal__a1" href="/">/Đăng ký</a></div>
                    <div className="login">
                        <div className="login__form">
                            <div className="login__form__title"> THÔNG TIN CÁ NHÂN </div>
                            <div className="login__form__getInfo">
                                <form onSubmit={(event) => this.handleSubmit(event)} method="get">
                                    <div className="row">
                                        <div className="col">
                                            <label className="email" htmlFor="email">Họ và tên :</label>
                                            <input id="email" type="text" name="txtname" onChange={(event) => this.handleChange(event)} />
                                            <label className="password" htmlFor="password">Địa chỉ email :</label>
                                            <input id="password" type="text" name="txtemail" onChange={(event) => this.handleChange(event)} />
                                        </div>
                                        <div className="col">
                                            <label className="email" htmlFor="email">Số ĐT :</label>
                                            <input id="email" type="text" name="txtphone" onChange={(event) => this.handleChange(event)} />
                                            <label className="password" htmlFor="password">Địa chỉ sống :</label>
                                            <input id="password" type="text" name="txtaddress" onChange={(event) => this.handleChange(event)} />
                                        </div>
                                    </div>
                                    <div className="statusAcount">
                                        <input id="remember" type="checkbox" name="" />
                                        <label className="remember" htmlFor="remember">Đăng kí nhận thông tin qua email</label>
                                    </div>
                                    <div className="login__form__title"> THÔNG TIN TÀI KHOẢN </div>
                                    <div className="row">
                                        <div className="col">
                                            <label className="email" htmlFor="email">Mật khẩu :</label>
                                            <input id="email" type="password" name="txtpassword" onChange={(event) => this.handleChange(event)} />
                                        </div>
                                        <div className="col">
                                            <label className="email" htmlFor="email">Nhập lại mật khẩu :</label>
                                            <input id="email" type="password" name="txtemail" onChange={(event) => this.handleChange(event)} />
                                        </div>
                                    </div>
                                    <div className="btn-login"><button type="submit">ĐĂNG KÝ</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default sigin;