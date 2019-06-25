import React, { Component } from 'react';

class productCart extends Component {
    render() {
        return (
            <tr>
                <td>
                    <img className="img-product" src="../../IMG/spx2-4.png" alt="/" />
                </td>
                <td className="name-product">Cây chân chim</td>
                <td className="price">
                    <p>250000 đ </p>
                </td>
                <td className="number">
                    <p>11</p>
                </td>
                <td className="price-total">
                    <p>2750000</p>
                </td>
                <td id="detele" producid={1} className="cancel">
                    <img src="../../IMG/Cancel.png" alt="/" />
                </td>
            </tr>
          
        );
    }
}

export default productCart;