import React, { Component } from 'react';

class listproducrHor extends Component {
    render() {
        return (
            <div className="contentMainlist">
                <div className="addressLocal"><a className="addressLocal__a" href>Home</a><a className="addressLocal__a1" href>/Danh sách sản phẩm</a></div>
                <div className="content">
                    <div className="content__classify">
                        <div className="content__classify__listProduct">
                            <div className="content__classify__listProduct__title">
                                <p className="content__classify__listProduct__title__p">Danh mục sản phẩm</p>
                                <hr className="content__classify__listProduct__title__hr" />
                            </div>
                            <div className="content__classify__listProduct__content">
                                <ul>
                                    <li><a href>&gt;Cây chậu treo (10)</a>
                                        <hr />
                                    </li>
                                    <li><a href>&gt;Cây cỏ hoa (3)</a>
                                        <hr />
                                    </li>
                                    <li><a href>&gt;Cây dây leo (3)</a>
                                        <hr />
                                    </li>
                                    <li><a href>&gt;Cây để bàn</a>
                                        <hr />
                                    </li>
                                    <li><a href>&gt;Cây may mắn</a>
                                        <hr />
                                    </li>
                                    <li><a href>&gt;Cây trang trí</a>
                                        <hr />
                                    </li>
                                    <li><a href>&gt;Cây nội thất</a>
                                        <hr />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content__classify__searchPrice">
                            <div className="content__classify__searchPrice__title">
                                <p className="content__classify__searchPrice__title__p">Tìm theo giá</p>
                                <hr className="content__classify__searchPrice__title__hr" />
                            </div>
                            <div className="content__classify__searchPrice__content">
                                <ul>
                                    <li><a href>&gt; 200.000 Đ - 400.000 Đ</a>
                                        <hr />
                                    </li>
                                    <li><a href>&gt; 400.000 Đ - 600.000 Đ</a>
                                        <hr />
                                    </li>
                                    <li><a href>&gt; 600.000 Đ - 800.000 Đ</a>
                                        <hr />
                                    </li>
                                    <li><a href>&gt; 800.000 Đ - 1.000.000 Đ</a>
                                        <hr />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content__classify__searchColor">
                            <div className="content__classify__searchColor__title">
                                <p className="content__classify__searchColor__title__p">Tìm theo màu</p>
                                <hr className="content__classify__searchColor__title__hr" />
                            </div>
                            <div className="content__classify__searchColor__content">
                                <div className="list1">
                                    <ul>
                                        <li><a href><img src="../../IMG/Ellipse1.png" alt /> Xanh cây</a></li>
                                        <li><a href><img src="../../IMG/Ellipse2.png" alt /> Tím</a></li>
                                        <li><a href><img src="../../IMG/Ellipse3.png" alt /> Vàng</a></li>
                                    </ul>
                                </div>
                                <div className="list2">
                                    <ul>
                                        <li><a href><img src="../../IMG/Ellipse4.png" alt /> Đỏ cam</a></li>
                                        <li><a href><img src="../../IMG/Ellipse5.png" alt /> Xanh trời</a></li>
                                        <li><a href><img src="../../IMG/Ellipse6.png" alt /> Hồng</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content__listProduct2"><img className="firstImg" src="../../IMG/The_Sill_84_Hester2.png" alt />
                        <div className="content__listProduct2__control"><a className="listGrid" href="file:///E:/2018-2019-nam3/HK%20II/FrontendSun/FE22_Green_shop/INDEX/Home/homeGrid2.html"><img src="../../IMG/listGrid.png" alt /></a><a className="listRow" href="file:///E:/2018-2019-nam3/HK%20II/FrontendSun/FE22_Green_shop/INDEX/Home/homeGrid1.html"><img src="../../IMG/list.png" alt /></a>
                            <div className="content__listProduct2__control__SortName">
                                <p>Sắp xếp theo tên</p>
                                <div className="btn-group">
                                    <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tên sản phẩm <span className="caret"> </span></button>
                                    <ul className="dropdown-menu">
                                        <li /><a href="#">test 1</a>
                                        <li /><a href="#">test 2</a>
                                        <li /><a href="#">test 3</a>
                                    </ul>
                                </div>
                            </div>
                            <div className="content__listProduct2__control__numberElement">
                                <p>Show</p>
                                <div className="btn-group">
                                    <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">15 <span className="caret"> </span></button>
                                    <ul className="dropdown-menu">
                                        <li /><a href="#">test 1</a>
                                        <li /><a href="#">test 2</a>
                                        <li /><a href="#">test 3</a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="content__listProduct2__display">
                            <div className="card"><img className="card-img-top" src="../../IMG/spx2-4.png" alt />
                                <div className="card-body">
                                    <h5 className="card-title">Cây chân chim</h5>
                                    <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                    <p className="card-text">250.000 đ</p>
                                </div>
                            </div>
                            <div className="card"><img className="card-img-top" src="../../IMG/spx2-5.png" alt />
                                <div className="card-body">
                                    <h5 className="card-title">Cây dạ lam</h5>
                                    <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                    <p className="card-text">250.000 đ</p>
                                </div>
                            </div>
                            <div className="card"><img className="card-img-top" src="../../IMG/spx2-15.png" alt />
                                <div className="card-body">
                                    <h5 className="card-title">Cây danh dự</h5>
                                    <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                    <p className="card-text">250.000 đ</p>
                                </div>
                            </div>
                            <div className="card"><img className="card-img-top" src="../../IMG/caydabupnho.png" alt />
                                <div className="card-body">
                                    <h5 className="card-title">Cây đa búp nhỏ</h5>
                                    <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                    <p className="card-text">250.000 đ</p>
                                </div>
                            </div>
                            <div className="card"><img className="card-img-top" src="../../IMG/spx2-11.png" alt />
                                <div className="card-body">
                                    <h5 className="card-title">Cây cọ ta</h5>
                                    <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                    <p className="card-text">250.000 đ</p>
                                </div>
                            </div>
                            <div className="card"><img className="card-img-top" src="../../IMG/spx2-6.png" alt />
                                <div className="card-body">
                                    <h5 className="card-title">Cây dừa nhỏ</h5>
                                    <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                    <p className="card-text">250.000 đ</p>
                                </div>
                            </div>
                            <div className="card"><img className="card-img-top" src="../../IMG/spx2-3.png" alt />
                                <div className="card-body">
                                    <h5 className="card-title">Cây đa gốc nhỏ</h5>
                                    <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                    <p className="card-text">250.000 đ</p>
                                </div>
                            </div>
                            <div className="card"><img className="card-img-top" src="../../IMG/spx2-4.png" alt />
                                <div className="card-body">
                                    <h5 className="card-title">Cây chân chim</h5>
                                    <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                    <p className="card-text">250.000 đ</p>
                                </div>
                            </div>
                            <div className="card"><img className="card-img-top" src="../../IMG/spx2-5.png" alt />
                                <div className="card-body">
                                    <h5 className="card-title">Cây dạ lam</h5>
                                    <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                    <p className="card-text">250.000 đ</p>
                                </div>
                            </div>
                            <div className="card"><img className="card-img-top" src="../../IMG/spx2-15.png" alt />
                                <div className="card-body">
                                    <h5 className="card-title">Cây danh dự</h5>
                                    <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                    <p className="card-text">250.000 đ</p>
                                </div>
                            </div>
                            <div className="card"><img className="card-img-top" src="../../IMG/caydabupnho.png" alt />
                                <div className="card-body">
                                    <h5 className="card-title">Cây đa búp nhỏ</h5>
                                    <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                    <p className="card-text">250.000 đ</p>
                                </div>
                            </div>
                            <div className="card"><img className="card-img-top" src="../../IMG/spx2-11.png" alt />
                                <div className="card-body">
                                    <h5 className="card-title">Cây cọ ta</h5>
                                    <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                    <p className="card-text">250.000 đ</p>
                                </div>
                            </div>
                        </div>
                        <div className="content__listProduct2__numberPage">
                            <ul>
                                <li className="li1"><a href>Trang trước</a></li>
                                <li className="li2"><a href>1</a></li>
                                <li className="li2"><a href>2</a></li>
                                <li className="li3"><a href>3</a></li>
                                <li className="li4"><a href>4</a></li>
                                <li className="li5"><a href>Trang cuối                             </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default listproducrHor;