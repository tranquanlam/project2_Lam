import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux'

import { fetchGithubData } from '../../../store/action/action'
import { fetchDataUser } from '../../../store/action/actionAcount'
import {fetchDataOder } from '../../../store/action/actionOder'
import {fetchDataOderDetail } from '../../../store/action/actionOderDetail'


import HomePage from '../home/home'
import LoginPage from '../login/login'
import SiginPage from '../sigin/sigin'
import DetailPage from '../detail/detail'
import CartPage from '../Cart/cart'
import DetailNew from '../new/detailNew'
import ListProduct from '../product/listproduct'
import InfoUser from '../infoClient/infoclient'

import EditUser from '../../ADMIN/element/editUser'
import ChartAdmin from '../../ADMIN/element/chart'
import Table from '../../ADMIN/element/table'
import Product from '../../ADMIN/element/product'
import AddUser from '../../ADMIN/element/addUser'

class routerpage extends Component {
    async componentDidMount() {
        //check thunk
        this.props.loadDatathunk()
        this.props.loadDatauser()
        this.props.loadDataoder()
        this.props.fetchDataoderdetail()
    }

    render() {
        return (
            <div>
               
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/sigin" component={SiginPage} />
                <Route path="/detail" component={DetailPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/detailNew" component={DetailNew} />
                <Route path="/listProduct" component={ListProduct} />
                <Route path="/infoUser" component={InfoUser} />


                <Route path="/admin/chart" component={ChartAdmin} />
                <Route path="/admin/editUser/:id" component={EditUser} />
                <Route path="/admin/table" component={Table} />
                <Route path="/admin/product/:id" component={Product} />
                <Route path="/admin/addUser" component={AddUser} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { listproHot: state.ProductReducer }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadDatathunk: () => {
            dispatch(fetchGithubData())
        },
        loadDatauser: () => {
            dispatch(fetchDataUser())
        },
        loadDataoder: () => {
            dispatch(fetchDataOder())
        },
        fetchDataoderdetail: () => {
            dispatch(fetchDataOderDetail())
        }
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(routerpage);