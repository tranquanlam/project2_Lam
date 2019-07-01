import React, { Component } from 'react';

class payment extends Component {
    render() {
        return (
            <div className="Table__pay">
                <table>
                    <tbody>
                    <tr>
                        <td>TỔNG TIỀN (CHƯA THUẾ)</td>
                        <td>{this.props.total} Đ</td>
                    </tr>
                        <tr />
                        <tr>
                            <td>THUẾ (VAT 10%)</td>
                            <td>{this.props.totalVAT} Đ</td>
                        </tr>
                        <tr />
                        <tr className="total">
                            <td>TỔNG TIỀN PHẢI THANH TOÁN</td>
                            <td>{this.props.totalPay} Đ</td>
                        </tr>
                        <tr>
                            <td>
                                <p className="pay" onClick={this.props.paymentMonney}>THANH TOÁN</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default payment;