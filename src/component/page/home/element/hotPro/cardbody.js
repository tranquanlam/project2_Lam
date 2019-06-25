import React, { Component } from 'react';

class cardbody extends Component {
    render() {
        return (
            <div className="card-body">
                <h5 className="card-title">{this.props.NamePro}</h5>
                <div className="star">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <i className="fa fa-star-half checked" aria-hidden="true"> </i>
                </div>
                <p className="card-text">{this.props.PricePro} đ</p>
            </div>
        );
    }
}

export default cardbody;