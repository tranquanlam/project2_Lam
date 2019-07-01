import React, { Component } from 'react';

class productCart extends Component {
    render() {
        return (
            <tr>
                <td>
                    <img className="img-product" src={process.env.PUBLIC_URL + '/IMG/' + this.props.imageItem} alt="/" />
                </td>
                <td className="name-product">{this.props.NameItem}</td>
                <td className="price">
                    <p>{this.props.priceItem} đ </p>
                </td>
                <td className="number">
                    <p>{this.props.amountItem}</p>
                </td>
                <td className="price-total">
                    <p>{this.props.Total} đ</p>
                </td>
                <td id="detele" producid={1} className="cancel">
                    <img src="../../IMG/Cancel.png" alt="/"  onClick={this.props.detele}/>
                </td>
            </tr>
          
        );
    }
}

export default productCart;