import React, { Component } from 'react';

class cardsale extends Component {
    render() {
        return (
            <div className="" >
                <div className="col-item">
                    <div className="photo">
                        <img src="../../IMG/spx2-6.png" className="img-responsive" alt="" />
                    </div>
                    <div className="info">
                        <div className="row">
                            <div className="card-body">
                                <h5 className="card-title">Cây chân chim</h5>
                                <div className="star">
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <i className="fa fa-star-half checked" aria-hidden="true"> </i>
                                </div>
                                <p className="card-text">250.000 đ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default cardsale;