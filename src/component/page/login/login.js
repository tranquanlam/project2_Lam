import React, { Component } from 'react';
import axios from 'axios';
import Redirect from 'react-router-dom/Redirect';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtemail: '',
            txtpassword: '',
            listPro: [],
            isRedirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        axios.get(`http://5d08a7b5034e5000140106c4.mockapi.io/api/user`)
            .then(res => {
                const listPro = res.data;
                this.setState({ listPro });
            })
    }
    handleSubmit = (event) => {
        console.log("lan 1");
        
       this.state.listPro.forEach(value => {
           if(value.email === this.state.txtemail){
            this.setState({
                isRedirect: true
            })
           }
       });  
    }
    render() {
        if (this.state.isRedirect === true) {
            return <Redirect
            to={{
              pathname: "/",
              state: { from: this.state.txtemail }
            }}
          />
        }

        return (
            <div className="containerLogin">
                <div className="addressLocal"><a className="addressLocal__a" href="/">Home</a><a className="addressLocal__a1" href="/">/Đăng nhập</a></div>
                <div className="login">
                    <div className="login__form">
                        <div className="login__form__title"> THÔNG TIN CÁ NHÂN</div>
                        <div className="login__form__getInfo">
                            <form onSubmit={(event) => this.handleSubmit(event)} method="get">
                                <label className="email" htmlFor="email">Email của bạn :</label>
                                <input id="email" type="email" name="txtemail" onChange={(event) => this.handleChange(event)} />
                                <label className="password" htmlFor="password">Password :</label>
                                <input id="password" type="password" name="txtpassword" onChange={(event) => this.handleChange(event)} />
                                <div className="statusAcount">
                                    <input id="remember" type="checkbox" name="" />
                                    <label className="remember" htmlFor="remember">ghi nhớ tài khoản</label><a className="fogot" href="/"><i>Bạn quên mật khẩu ?</i></a>
                                </div>
                                <div className="btn-login"><button type="submit">ĐĂNG NHẬP</button></div>
                            </form>
                        </div>
                    </div>
                    <div className="sign-in">
                        <p className="title">BẠN CHƯA CÓ TÀI KHOẢN ?</p>
                        <p>Đăng ký tài khoản ngay để có thể mua hàng nhanh chóng và dễ dàng hơn ! Ngoài ra còn có rất nhiều chính sách và ưu đãi cho các thành viên citybike</p>
                        <div className="sign-btn">ĐĂNG KÍ</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default login;