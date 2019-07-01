import React, { Component } from 'react';
import ProductCart from './element/productCart'
import { connect } from 'react-redux'
import Redirect from 'react-router-dom/Redirect'
import { ToPageCart, deteleItemCard ,deteleitemAPI,savePaymentAPI} from '../../../store/action/action'
import Payment from './element/payment'
import Contact from '../../common/contact/contact'
import Headers from '../../common/header/header'
import Nav from '../../common/nav/nav'

class cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCart: [],
            checkLogin: true,
            sumPay: 0,
           
        }
    }
    componentDidMount() {
        if (this.props.acountReducer.id !== 0) {
            var a = JSON.parse(localStorage.getItem(`${this.props.acountReducer.id}`));
            this.setState({
                listCart: a
            })
            var sum = 0
            a.forEach(element => {
                sum = sum + (element.price * element.amount)
                this.setState({
                    sumPay: sum
                })
            });
        }
    }
    detele = async (idPro, idUser) => {
        // xóa trong giỏ hàng localStorage
        this.props.deteleItemCard(idPro, idUser)
        //xóa trên API
        this.props.deteleItemCartAPI(idPro,idUser)
        var a = JSON.parse(localStorage.getItem(`${this.props.acountReducer.id}`));
        this.setState({
            listCart: a,
            
        })
    }
    paymentMonney = () =>{
        this.props.savePayment(this.props.acountReducer.id,this.state.sumPay*90/100)
        this.setState({
            listCart :  JSON.parse(localStorage.getItem(`${this.props.acountReducer.id}`))
        })
    }
    render() {
        if (this.props.acountReducer.id === 0) {
            return <Redirect to="/login"></Redirect>
        }
        let itemArray = this.state.listCart
        if (!itemArray) itemArray = []

        return (
            <div><Contact></Contact>
                <Headers></Headers>
                <Nav></Nav>
                <div className="container-tableBK">
                    <div className="addressLocal">
                        <a className="addressLocal__a" href="/">Home</a>
                        <a className="addressLocal__a1" href="/">/Giỏ Hàng</a>
                    </div>
                    <div className="title">
                        <p>Giỏ hàng</p>
                    </div>
                    <div className="Table">
                        <table id="basket">
                            <tbody>
                                <tr>
                                    <th>Hình ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Đơn giá </th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                    <th>Xóa</th>
                                </tr>
                                {
                                    itemArray.map((value, key) => (
                                        <ProductCart key={key}
                                            imageItem={value.imgItem}
                                            NameItem={value.nameItem}
                                            priceItem={value.price}
                                            amountItem={value.amount}
                                            detele={() => this.detele(value.idPro, value.idUser)}
                                            Total={value.price * value.amount} ></ProductCart>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                        <div className="Table__action">
                            <div className="Table__action__cancel">HỦY ĐƠN HÀNG</div>
                            <div className="Table__action__go">TIẾP TỤC MUA</div>
                        </div>
                        <Payment total={this.state.sumPay} totalVAT={this.state.sumPay * 10 / 100} totalPay={this.state.sumPay * 90 / 100} paymentMonney={()=>this.paymentMonney()}></Payment>
                    </div>
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
const mapDispatchToProps = (dispatch) => {
    return {
        RedirecCard: () => {
            dispatch(ToPageCart())
        },
        deteleItemCard: (idPro, idUser) => {
            dispatch(deteleItemCard(idPro, idUser))
        },
        deteleItemCartAPI :(idPro, idUser) =>{
            dispatch(deteleitemAPI(idPro,idUser))
        },
        savePayment :(idUser,sum) =>{
            dispatch(savePaymentAPI(idUser,sum))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(cart);