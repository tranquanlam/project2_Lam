import React, { Component } from 'react';

class sigin extends Component {
    render() {
        return (
            <div className="containerLogin">
                <div className="addressLocal"><a className="addressLocal__a" href="/">Home</a><a className="addressLocal__a1" href="/">/Đăng ký</a></div>
                <div className="login">
                    <div className="login__form">
                        <div className="login__form__title"> THÔNG TIN CÁ NHÂN </div>
                        <div className="login__form__getInfo">
                            <form onSubmit={(event) => this.handleSubmit(event)} method="get">
                                <div className="row">
                                    <div className="col">
                                        <label className="email" htmlFor="email">Email của bạn :</label>
                                        <input id="email" type="email" name="txtemail" onChange={(event) => this.handleChange(event)} />
                                        <label className="password" htmlFor="password">Password :</label>
                                        <input id="password" type="password" name="txtpassword" onChange={(event) => this.handleChange(event)} />
                                    </div>
                                    <div className="col">
                                        <label className="email" htmlFor="email">Email của bạn :</label>
                                        <input id="email" type="email" name="txtemail" onChange={(event) => this.handleChange(event)} />
                                        <label className="password" htmlFor="password">Password :</label>
                                        <input id="password" type="password" name="txtpassword" onChange={(event) => this.handleChange(event)} />
                                    </div>
                                </div>
                                <div className="statusAcount">
                                    <input id="remember" type="checkbox" name="" />
                                    <label className="remember" htmlFor="remember">Đăng kí nhận thông tin qua email</label>
                                </div>
                                <div className="login__form__title"> THÔNG TIN TÀI KHOẢN </div>
                                <div className="row">
                                    <div className="col">
                                        <label className="email" htmlFor="email">Email của bạn :</label>
                                        <input id="email" type="email" name="txtemail" onChange={(event) => this.handleChange(event)} />
                                    </div>
                                    <div className="col">
                                        <label className="email" htmlFor="email">Email của bạn :</label>
                                        <input id="email" type="email" name="txtemail" onChange={(event) => this.handleChange(event)} />
                                    </div>
                                </div>
                                <div className="btn-login"><button type="submit">ĐĂNG KÝ</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default sigin;