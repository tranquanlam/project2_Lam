import React, { Component } from 'react';

class cardPro extends Component {
    render() {
        return (
            <div className="card">
                <div className="row">
                    <div className="col-4"><img className="card-img" src={process.env.PUBLIC_URL + '/IMG/' + this.props.imagepPro} alt="/" /></div>
                    <div className="col-8">
                        <div className="card-body">
                            <p className="card-title">{this.props.NamePro}</p>
                            <p className="card-text">Cây ngọc ngân là loại cây cho tình yêu! Đây là món quà bất ngờ để bạn tặng &amp;quot; người ấy &amp; quot;.Ngọc ngân (Valentien) không chỉ đẹp ở phiến lá xanh đốm trắng</p>
                            <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                            <p className="card-price">{this.props.PricePro}</p>
                            <div className="card-body__action">
                                <div className="card-body__action__buy"><a href="/">MUA NGAY</a></div>
                                <div className="card-body__action__seach"><a href="/"><img src="../../IMG/icon-search-ct.png" alt="/" /></a></div>
                                <div className="card-body__action__love"><a href="/"><img src="../../IMG/heart.png" alt="/" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default cardPro;