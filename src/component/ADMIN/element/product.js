import React, { Component } from 'react';
import Sidebar from '../sidebar'
import { connect } from 'react-redux'
import axios from 'axios'
import RecordPro from './recordPro'

class product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
          lispro: []
        }
      }
    async componentDidMount(){
        var list =[]
            this.props.listproHot.listProducts.forEach(element => {
            if(parseInt(element.catagory)===parseInt(this.props.match.params.id)){
                list.push(element)
            }
        });
        this.setState({
            lispro: list
        })
    }
    render() {
        var lispro = this.state.lispro
        if (!lispro) lispro = []
        return (
            <div className="page-wrapper chiller-theme toggled">
                <Sidebar></Sidebar>
                <div className="page-content">
                    {this.props.match.params.id}
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                                <th>Tổng tiền</th>
                                <th>Hình ảnh</th>
                                <th><img  src={process.env.PUBLIC_URL + '/IMG/' +"baseline-add_circle-24px.svg"} alt="/"></img></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                lispro.map((value, key) => (
                                    <RecordPro id={value.id} productName={value.productName} catagory={value.catagory} price={value.price} amountbuy={value.amountbuy} imageproduct={value.imageproduct}></RecordPro>
                                ))
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

export default connect(mapStateToProps)(product);