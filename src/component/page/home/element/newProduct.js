import React, { Component } from 'react';

class newProduct extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src="../../IMG/spx2-15.png" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Cây danh dự</h5
                    ><div className="star">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <i className="fa fa-star-half checked" aria-hidden="true"></i>
                    </div>
                    <p className="card-text">250000 đ <strike>250.000 đ</strike></p>
                </div>
            </div>
        );
    }
}

export default newProduct;