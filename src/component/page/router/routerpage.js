import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from '../home/home'
import LoginPage from '../login/login'
import SiginPage from '../sigin/sigin'
import DetailPage from '../detail/detail'
import CartPage from '../Cart/cart'
import DetailNew from '../new/detailNew'
import ListProduct from '../product/listproduct'
import InfoUser from '../infoClient/infoclient'

import ChartAdmin from '../../ADMIN/element/chart'
import Table from '../../ADMIN/element/table'

class routerpage extends Component {
    render() {
        return (
            <div>
                <Route exact path="/"  component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/sigin" component={SiginPage} />
                <Route path="/detail" component={DetailPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/detailNew" component={DetailNew} />
                <Route  path="/listProduct" component={ListProduct} />
                <Route  path="/infoUser" component={InfoUser} />


                <Route  path="/admin/chart" component={ChartAdmin} />
                <Route  path="/admin/table" component={Table} />
            </div>
        );
    }
}

export default routerpage;