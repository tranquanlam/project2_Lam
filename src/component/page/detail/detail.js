import React, { Component } from 'react';


class detail extends Component {
    render() {
        return (
            <div className="content-detail">
                <div className="addressLocal"><a className="addressLocal__a" href>Home</a><a className="addressLocal__a1" href>/Danh sách sản phẩm</a></div>
                <div className="detail">
                    <div className="detail__content">
                        <div className="detail__content__container">
                            <div className="detail__content__container__mySlides">
                                <div className="mySlides" style={{ display: 'block' }}>
                                    <div className="numbertext" /><img src="../../IMG/spx2-4.png" style={{ width: '100%' }} />
                                </div>
                                <div className="mySlides" style={{ display: 'none' }}>
                                    <div className="numbertext" /><img src="../../IMG/spx2-11.png" style={{ width: '100%' }} />
                                </div>
                                <div className="mySlides" style={{ display: 'none' }}>
                                    <div className="numbertext" /><img src="../../IMG/spx2-6.png" style={{ width: '100%' }} />
                                </div>
                                <div className="mySlides" style={{ display: 'none' }}>
                                    <div className="numbertext" /><img src="../../IMG/spx2-5.png" style={{ width: '100%' }} />
                                </div>
                                <div className="mySlides" style={{ display: 'none' }}>
                                    <div className="numbertext" /><img src="../../IMG/spx2-15.png" style={{ width: '100%' }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm"><img className="demo cursor active" src="../../IMG/spx2-4.png" style={{ width: '100%' }} onclick="currentSlide(1)" alt="The Woods" /></div>
                                <div className="col-sm"><img className="demo cursor" src="../../IMG/spx2-11.png" style={{ width: '100%' }} onclick="currentSlide(2)" alt="Cinque Terre" /></div>
                                <div className="col-sm"><img className="demo cursor" src="../../IMG/spx2-6.png" style={{ width: '100%' }} onclick="currentSlide(3)" alt="Mountains and fjords" /></div>
                                <div className="col-sm"><img className="demo cursor" src="../../IMG/spx2-5.png" style={{ width: '100%' }} onclick="currentSlide(4)" alt="Northern Lights" /></div>
                                <div className="col-sm"><img className="demo cursor" src="../../IMG/spx2-15.png" style={{ width: '100%' }} onclick="currentSlide(5)" alt="Nature and sunrise" /></div>
                            </div>
                        </div>
                        <div className="detail__content__info">
                            <div className="detail__content__info__title">
                                <p>Cây dạ lam</p>
                                <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                <p className="price">4.490.000 đ</p>
                            </div>
                            <hr />
                            <div className="detail__content__info__decription">
                                <p>Cây mọc bụi thưa, thân vươn thẳng với chiều cao trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên,gân lá nổi rõ, phiến rộng khoảng từ 15-20cm.Lá có màu xanh đậm ở mặt trên, quanh gân có màu trắng sữa; mặt dưới lá nhạt màu hơn.Lá cây dạ lam mọc cánh, cuống lá dài khi rụng để lại các khía màu nâu nhạt. </p>
                            </div>
                            <hr />
                            <div className="detail__content__info__number">
                                <p>Số lượng</p>
                            </div>
                            <hr />
                            <div className="detail__content__info__action">
                                <div className="card-body__action">
                                    <div className="card-body__action__buy"><a href>MUA NGAY</a></div>
                                    <div className="card-body__action__seach"><a href><img src="../../IMG/icon-search-ct.png" alt /></a></div>
                                    <div className="card-body__action__love"><a href><img src="../../IMG/heart.png" alt /></a></div>
                                </div>
                            </div>
                            <hr />
                            <div className="detail__content__info__connect"><img src="../../IMG/fatw6.png" alt /></div>
                        </div>
                    </div>
                    <div className="detail__source">
                        <div className="mt-3"><br />
                            <ul className="nav nav-tabs">
                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#home">Home</a></li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu1">Menu 1</a></li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu2">Menu 2</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="home"><br />
                                    <p>Tên phổ thông  : Giả Lan Huỳnh Tinh cảnh vòng vòng</p>
                                    <p>Tên khoa học :  Calathea zebria</p>
                                    <p>Họ thực vật :Marantaceae (Củ dong)</p>
                                    <p>Chiều cao  : 0,8 - 1,2m</p>
                                    <p>Cây dạ lam có nguồn gốc từ Brazil,được du nhập và phân bố rộng khắp ở Việt Nam</p>
                                    <p>Cây mọc thành bụi thưa thân luôn thẳng với chiều cao cây trung bình từ 0,8 đến 1m lá hình trứng mép lá Nguyên gân lá nổi Rõ biến động khoảng từ 15 đến 20 cm có lá có màu xanh đậm ở mặt trên quanh lá có màu trắng sữa mặt dưới lá nhạt màu hơn lá cây dạ lan mọc cách uống lá dài khi rụng để lại các khi màu nâu nhạt Đây là loại cây có dáng đẹp .Tươi khỏe cây rất phù hợp trồng chậu trang trí nội thất văn phòng ngoài ra cây còn có đặc điểm lọc khí làm xanh mát môi trường giúp điều hòa không khí đặc biệt tốt cho những môi trường thường xuyên sử dụng các loại máy móc tăng nhiệt có thể bày cây ở hành lang ở giữa sảnh đặt ở cạnh bàn làm việc hoặc trang trí các góc phòng có diện tích trung bình</p>
                                </div>
                                <div className="tab-pane fade" id="menu1"><br />
                                    <h3>Menu 1</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <div className="tab-pane fade" id="menu2"><br />
                                    <h3>Menu 2</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="different-product-title">
                    <p>Sản phẩm mua nhiều</p>
                    <hr />
                </div>
                <div className="different-product">
                    <div className="card">       <img className="card-img-top" src="../../IMG/spx2-4.png" alt />
                        <div className="card-body">
                            <h5 className="card-title">Cây chân chim</h5>
                            <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                            <p className="card-text">250.000 đ</p>
                        </div>
                    </div>
                    <div className="card">       <img className="card-img-top" src="../../IMG/spx2-6.png" alt />
                        <div className="card-body">
                            <h5 className="card-title">Cây dừa nhỏ</h5>
                            <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                            <p className="card-text">250.000 đ</p>
                        </div>
                    </div>
                    <div className="card">       <img className="card-img-top" src="../../IMG/spx2-5.png" alt />
                        <div className="card-body">
                            <h5 className="card-title">Cây dạ lam</h5>
                            <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                            <p className="card-text">250.000 đ</p>
                        </div>
                    </div>
                    <div className="card">       <img className="card-img-top" src="../../IMG/spx2-15.png" alt />
                        <div className="card-body">
                            <h5 className="card-title">Cây danh dự</h5>
                            <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                            <p className="card-text">250.000 đ</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default detail;