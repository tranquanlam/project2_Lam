import React, { Component } from 'react';

class login extends Component {
    render() {
        return (
            <div className="containerLogin">
                <div className="addressLocal"><a className="addressLocal__a" href>Home</a><a className="addressLocal__a1" href>/Đăng nhập</a></div>
                <div className="login">
                    <div className="login__form">
                        <div className="login__form__title"> THÔNG TIN CÁ NHÂN</div>
                        <div className="login__form__getInfo">
                            <form action method="get">
                                <label className="email" htmlFor="email">Email của bạn :</label>
                                <input id="email" type="email" name />
                                <label className="password" htmlFor="password">Password :</label>
                                <input id="password" type="password" name />
                                <div className="statusAcount">
                                    <input id="remember" type="checkbox" name />
                                    <label className="remember" htmlFor="remember">ghi nhớ tài khoản</label><a className="fogot" href><i>Bạn quên mật khẩu ?</i></a>
                                </div>
                                <div className="btn-login">ĐĂNG NHẬP</div>
                            </form>
                        </div>
                    </div>
                    <div className="sign-in">
                        <p className="title">BẠN CHƯA CÓ TÀI KHOẢN ?</p>
                        <p>Đăng ký tài khoản ngay để có thể mua hàng nhanh chóng và dễ dàng hơn ! Ngoài ra còn có rất nhiều chính sách và ưu đãi cho các thành viên citybike</p>
                        <div className="sign-btn">
                            ĐĂNG KÍ            </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default login;