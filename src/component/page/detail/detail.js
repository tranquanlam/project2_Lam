import React, { Component } from 'react';
import Decription from './element/decriptionPro'
import DifferentPro from './element/differentPro'
import { connect } from 'react-redux'

class detail extends Component {

    componentWillMount(){
    }
    render() {
        return (
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
        );
    }
}
const mapStateToProps = (state) => {
    return { listproHot: state.ProductReducer }
}

export default connect(mapStateToProps) (detail);
