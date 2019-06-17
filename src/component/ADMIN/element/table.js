import React, { Component } from 'react';
import Sidebar from '../sidebar'
import RecordTable from './recordTable'
import CartDetail from './cartDetail'
import RecordUser from './recordUser'
import axios from 'axios'
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from 'react-redux'
import {fetchDataOder } from '../../../store/action/actionOder'


class table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOder: [],
            isHovering: false,
            listcartDetail: [],
            listCartUser: [],
            listUser: []
        }
    }
    handleMouseHover = async (id) => {
        var list = []
        this.state.listcartDetail.forEach(element => {
            console.log(element.idCard + "/" + id);
            if (parseInt(element.idCard) === parseInt(id)) {
                list.push(element)
            }
        });
        console.log(list);
        this.setState({
            listCartUser: list
        })
        console.log(this.state.listcartDetail);
        this.setState(this.toggleHoverState);
    }
    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }
    async componentDidMount() {
        let listdata = await axios.get('http://5d08a7b5034e5000140106c4.mockapi.io/api/cartDetail')
            .then(function (response) {
                return response.data
            })
        this.setState({
            listOder: this.props.listproHot.listOder,
            listcartDetail: this.props.listproHot.listCardDetail,
            listUser : this.props.acountReducer.listUser
        })
    }
    render() {
        var listOder = this.state.listOder
        if (!listOder) listOder = []
        var listCartUser = this.state.listCartUser
        if (!listCartUser) listCartUser = []
        var listUser = this.state.listUser
        if (!listUser) listUser = []
        return (
            <div className="page-wrapper chiller-theme toggled">
                <Sidebar></Sidebar>
                <div className="page-content">
                    <h2>Lịch sử mua hàng</h2>
                    <p></p>
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>idCart</th>
                                <th>idUser</th>
                                <th>Tổng tiền</th>
                                <th>Ngày thanh toán</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listOder.map((value, key) => (
                                    <RecordTable key={key}
                                        id={value.id}
                                        idCart={value.idCart}
                                        idUser={value.idUser}
                                        total={value.Sum}
                                        time={value.date}
                                        HoverEnter={() => this.handleMouseHover(value.idCart)}
                                        LeaveMouse={() => this.handleMouseHover(value.idCart)}
                                    ></RecordTable>
                                ))
                            }
                        </tbody>
                    </table>
                    <table className="table table-dark ">
                        <thead>
                            <tr>
                                <th>idProduct</th>
                                <th>Tên </th>
                                <th>idUser</th>
                                <th>Tổng tiền</th>
                                <th>Ngày trả</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.isHovering && (
                                listCartUser.map((value, key) => (<CartDetail key={key} idProduct={value.idProduct} price={value.Price}></CartDetail>))
                            )
                            }
                        </tbody>
                    </table>
                    <h2>Người dùng</h2>
                    <p></p>
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>idUser</th>
                                <th>email</th>
                                <th>password</th>
                                <th>name</th>
                                <th>phone</th>
                                <th>address</th>
                                <th><Link to="/admin/addUser"><img  src={process.env.PUBLIC_URL + '/IMG/' +"baseline-add_circle-24px.svg"} alt="/"></img></Link></th>
                               
                            </tr>
                        </thead>
                        <tbody>
                        {
                                listUser.map((value, key) => (<RecordUser key={key} idUser={value.id} email={value.email} password={value.password} name={value.name} phone={value.phone} address={value.address}></RecordUser>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
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
export default connect(mapStateToProps)(table);