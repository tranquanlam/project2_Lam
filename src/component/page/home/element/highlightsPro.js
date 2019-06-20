import React, { Component } from 'react';

class highlightsPro extends Component {
    render() {
        return (
            <div className="container-home__best">
                <p className="container-home__best__p">Sản phẩm nổi bật</p>
                <hr className="container-home__best__hr" />
                <div className="container-home__best__list" id="container-home-featuredProducts">
                    <div className="container-home__best__list__list1">
                        <div className="container-home__best__list__list1__Cardbig">
                            <div className="card" id="pro-1" onclick productid={1}>
                                <div className="card__status"><p className="card__status__p">New</p></div>
                                <div className="hovereffect"><img className="img-responsive card-img-top" src="../../IMG/spx2-4.png" alt />
                                    <div className="overlay">
                                        <div className="card__action"><p className="card__status__p">MUA NGAY</p></div>
                                        <div className="card__search"><img src="../../IMG/icon-search-ct.png" alt /></div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Cây chân chim</h5>
                                    <div className="star"><span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <i className="fa fa-star-half checked" aria-hidden="true"> </i>
                                    </div>
                                    <p className="card-text">250.000 đ</p></div>
                            </div>
                            <div className="container-home__best__list__list1__listCard">
                                <div className="card" id="pro-2" productid={2}>
                                    <div className="hovereffect">
                                        <img className="img-responsive card-img-top" src="../../IMG/spx2-11.png" alt />
                                        <div className="overlay" /></div>
                                    <div className="card-body">
                                        <h5 className="card-title">Cây cọ ta</h5>
                                        <div className="star">
                                            <span className="fa fa-star checked" /><span className="fa fa-star checked" />
                                            <span className="fa fa-star checked" /><span className="fa fa-star checked" />
                                            <i className="fa fa-star-half checked" aria-hidden="true"> </i>
                                        </div><p className="card-text">250.000 đ</p>

                                    </div>
                                </div>
                                <div className="card" id="pro-3">
                                    <div className="hovereffect">
                                        <img className="img-responsive card-img-top" src="../../IMG/spx2-6.png" alt />
                                        <div className="overlay" /></div>
                                    <div className="card-body">
                                        <h5 className="card-title">Cây dừa nhỏ</h5>
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
                    <div className="container-home__best__list__list2">
                        <div className="container-home__best__list__list2__listCard">
                            <div className="card"><div className="card__status">
                                <p className="card__status__p">-50%</p>
                            </div>
                                <div className="hovereffect">
                                    <img className="img-responsive card-img-top" src="../../IMG/spx2-5.png" alt />
                                    <div className="overlay" /></div>
                                <div className="card-body">
                                    <h5 className="card-title">Cây dạ lam</h5>
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
                            <div className="card">
                                <div className="card__status">
                                    <p className="card__status__p">New</p>
                                </div>
                                <div className="hovereffect">
                                    <img className="img-responsive card-img-top" src="../../IMG/spx2-15.png" alt />
                                    <div className="overlay" /></div>
                                <div className="card-body">
                                    <h5 className="card-title">Cây danh dự</h5>
                                    <div className="star">
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <i className="fa fa-star-half checked" aria-hidden="true"> </i>
                                    </div><p className="card-text">250.000 đ</p>
                                </div>
                            </div>
                        </div>
                        <div className="container-home__best__list__list2__Cardbig">
                            <div className="card">
                                <div className="card__status">
                                    <p className="card__status__p">-50%</p>
                                </div>
                                <div className="hovereffect">
                                    <img className="img-responsive card-img-top" src="../../IMG/spx2-3.png" alt />
                                    <div className="overlay" /></div>
                                <div className="card-body">
                                    <h5 className="card-title">Cây đa gốc nhỏ</h5>
                                    <div className="star">
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <span className="fa fa-star checked" />
                                        <i className="fa fa-star-half checked" aria-hidden="true">
                                        </i>
                                    </div>
                                    <p className="card-text">250.000 đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default highlightsPro;