import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect'
import axios from 'axios'
import { connect } from 'react-redux';
import { savelogin, saveListCart, saveListCartDetail } from '../../../store/action/action'
import { BrowserRouter as Router, Link } from "react-router-dom";

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtemail: '',
            txtpassword: '',
            listPro: [],
            listCart: [],
            listCartDetail :[],
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
        axios.get(`http://5d08a7b5034e5000140106c4.mockapi.io/api/cart`)
            .then(res => {
                const listCart = res.data;
                this.setState({ listCart });
            })
        axios.get(`http://5d08a7b5034e5000140106c4.mockapi.io/api/cartDetail`)
            .then(res => {
                const listCartDetail = res.data;
                this.setState({ listCartDetail });
            })
    }
    handleSubmit = () => {
        //khai bao user id cho viec kiem tra co gio hang hay k
        var idUser = 0;
        //check login
        this.state.listPro.forEach(value => {
            if (value.email === this.state.txtemail) {
                idUser = value.id
                this.setState({
                    isRedirect: true
                })
                this.props.saveLogin(value.name, value.id);
            }
        });
        //kiem tra xem user co cart hay chua
        var checkCart = true
        this.state.listCart.forEach(element => {
            if (element.idUser === idUser) {
                checkCart = false
            }
        });
        //đổ list cart vào store redux
        this.props.saveListCart(this.state.listCart)
        //đổ listcartDetail lên redux
        this.props.savelistcartdetail(this.state.listCartDetail);
        //neu chua co thi tao doi tuong && them vao API
        if (checkCart === true) {
            const cart = {
                idUser: idUser
            }
            axios.post(`http://5d08a7b5034e5000140106c4.mockapi.io/api/cart`, { ...cart })
                .then(res => {
                })
        }
        //dang nhap vao localstore neu chua co
        if (localStorage.getItem(`${idUser}`) == null) {
            var b = [];
            localStorage.setItem(`${idUser}`, JSON.stringify(b));
        }
    }
    render() {
        if (this.state.isRedirect === true) {
            return <Redirect
                to={{
                    pathname: "/",
                }}
            />
        }
        return (
            <div className="containerLogin">
                <div className="addressLocal"><a className="addressLocal__a" href="/">Home</a><a className="addressLocal__a1" href="/">/Đăng nhập</a></div>
                <div className="login">
                    <div className="login__form">
                        <div className="login__form__title"> THÔNG TIN CÁ NHÂN {this.props.dbPro.name}</div>
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
                        <div className="sign-btn"><Link to='/sigin'>ĐĂNG KÍ</Link></div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        dbPro: state.AcountReducer,
        dbCart: state.ProductReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveLogin: (name, id) => {
            dispatch(savelogin(name, id))
        },
        saveListCart: (listCart) => {
            dispatch(saveListCart(listCart))
        },
        savelistcartdetail: (listCardDetail) => {
            dispatch(saveListCartDetail(listCardDetail))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(login)
