import React, { Component } from 'react';

class differentPro extends Component {
    render() {
        return (
            <div className="different-product">
                <div className="card">       <img className="card-img-top" src="../../IMG/spx2-4.png" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Cây chân chim</h5>
                        <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                        <p className="card-text">250.000 đ</p>
                    </div>
                </div>
                <div className="card">       <img className="card-img-top" src="../../IMG/spx2-6.png" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Cây dừa nhỏ</h5>
                        <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                        <p className="card-text">250.000 đ</p>
                    </div>
                </div>
                <div className="card">       <img className="card-img-top" src="../../IMG/spx2-5.png" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Cây dạ lam</h5>
                        <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                        <p className="card-text">250.000 đ</p>
                    </div>
                </div>
                <div className="card">       <img className="card-img-top" src="../../IMG/spx2-15.png" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Cây danh dự</h5>
                        <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                        <p className="card-text">250.000 đ</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default differentPro;