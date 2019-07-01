import React, { Component } from 'react';
import Decription from './element/decriptionPro'
import DifferentPro from './element/differentPro'
import { connect } from 'react-redux'
import Contact from '../../common/contact/contact'
import Headers from '../../common/header/header'
import Nav from '../../common/nav/nav'

class detail extends Component {

    componentWillMount() {
    }
    render() {
        return (
            <div><Contact></Contact>
                <Headers></Headers>
                <Nav></Nav>
                <div className="content-detail">
                    <div className="addressLocal">
                        <a className="addressLocal__a" href="/">Home</a>
                        <a className="addressLocal__a1" href="/">/Danh sách sản phẩm</a>
                    </div>
                    <Decription></Decription>
                    <div className="different-product-title">
                        <p>Sản phẩm mua nhiều</p>
                        <hr />
                    </div>
                    <DifferentPro></DifferentPro>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { listproHot: state.ProductReducer }
}

export default connect(mapStateToProps)(detail);