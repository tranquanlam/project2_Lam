import React, { Component } from 'react'

export default class bestSell extends Component {
    render() {
        return (
            <div className="card">
                <div className="row">
                    <div className="col-4"><img className="card-img" src="../../IMG/spx2-4.png" alt="" /></div>
                    <div className="col-8">
                        <div className="card-body">
                            <p className="card-title">Cây chân chim</p>
                            <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                            <p className="card-text">250.000 đ</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
