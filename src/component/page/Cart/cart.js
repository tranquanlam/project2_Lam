import React, { Component } from 'react';
import ProductCart from './element/productCart'

class cart extends Component {
    render() {
        return (
            <div className="container-tableBK">
                <div className="addressLocal"><a className="addressLocal__a" href="/">Home</a><a className="addressLocal__a1" href="/">/Giỏ Hàng</a></div>
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
                            <ProductCart></ProductCart>
                            <ProductCart></ProductCart>
                        </tbody>
                    </table>
                    <div className="Table__action">
                        <div className="Table__action__cancel">HỦY ĐƠN HÀNG</div>
                        <div className="Table__action__go">TIẾP TỤC MUA</div>
                    </div>
                    <div className="Table__pay">
                        <table>
                            <tbody><tr>
                                <td>TỔNG TIỀN (CHƯA THUẾ)</td>
                                <td>270.000 Đ</td>
                            </tr>
                                <tr />
                                <tr>
                                    <td>THUẾ (VAT 10%)</td>
                                    <td>270.00 Đ</td>
                                </tr>
                                <tr />
                                <tr className="total">
                                    <td>TỔNG TIỀN PHẢI THANH TOÁN</td>
                                    <td>297.000 Đ</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="pay">THANH TOÁN</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default cart;