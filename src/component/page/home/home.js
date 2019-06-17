import React, { Component } from 'react';
import Bannel from '../home/element/banner'
import { connect } from 'react-redux'
import HighlighPro from '../home/element/highlightsPro'
import SaleProduct from '../home/element/salePro'
import Redirect from 'react-router-dom/Redirect'
import { saveListCartDetail} from '../../../store/action/action'


class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ToYesNo: false
        }
    }
 
    render() {
        if(this.props.listproHot.ToYesNoCart === true){
            return <Redirect to="/cart"></Redirect>
        }
        return (
            <div>
                <header>
                    <Bannel></Bannel>
                </header>
                <div className="container-home">
                    <HighlighPro></HighlighPro>
                    <div className="container-home__titleSell">
                        <div className="title__sell">
                            <p className="title__sell__p">Sản phẩm mua nhiều</p>
                            <hr className="title__sell__hr" />
                        </div>
                        <div className="title__sale" id="title__sale">
                            <div className="controls pull-right hidden-xs">
                                {/* <a className="left fa fa-chevron-left btn btn-primary" href="/carousel-example-generic1" data-slide="prev" />
                                <a className="right fa fa-chevron-right btn btn-primary" href="/carousel-example-generic" data-slide="next" /> */}
                            </div>
                            <p className="title__sale__p">Sản phẩm khuyến mãi</p>
                            <hr className="title__sale__hr" />
                        </div>
                    </div>
                    <div className="container-home__sell">
                        <div className="container-home__sell__list">
                            <div className="container-home__sell__list__best">
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
                                <div className="card">
                                    <div className="row">
                                        <div className="col-4"><img className="card-img" src="../../IMG/spx2-5.png" alt="" /></div>
                                        <div className="col-8">
                                            <div className="card-body">
                                                <p className="card-title">Cây dạ lam</p>
                                                <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                                <p className="card-text">250.000 đ</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row">
                                        <div className="col-4"><img className="card-img" src="../../IMG/spx2-15.png" alt="" /></div>
                                        <div className="col-8">
                                            <div className="card-body">
                                                <p className="card-title">Cây danh dự</p>
                                                <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                                <p className="card-text">250.000 đ</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row">
                                        <div className="col-4"><img className="card-img" src="../../IMG/caydabupnho.png" alt="" /></div>
                                        <div className="col-8">
                                            <div className="card-body">
                                                <p className="card-title">Cây đa búp nhỏ</p>
                                                <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                                <p className="card-text">250.000 đ</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row">
                                        <div className="col-4"><img className="card-img" src="../../IMG/spx2-11.png" alt="" /></div>
                                        <div className="col-8">
                                            <div className="card-body">
                                                <p className="card-title">Cây cọ ta</p>
                                                <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                                <p className="card-text">250.000 đ</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="row">
                                        <div className="col-4"><img className="card-img" src="../../IMG/spx2-6.png" alt="" /></div>
                                        <div className="col-8">
                                            <div className="card-body">
                                                <p className="card-title">Cây dừa nhỏ</p>
                                                <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                                                <p className="card-text">250.000 đ</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <SaleProduct></SaleProduct>
                        </div>
                        <div className="container-home__sell__advertisement" />
                    </div>
                    <div className="container-home__titlenew">
                        <div className="title__new">
                            <p className="title__new__p">Sản phẩm mới</p>
                            <hr className="title__new__hr" />
                        </div>
                    </div>
                    <div className="container-home__new" id="title">
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
                        <div className="card">
                            <img className="card-img-top" src="../../IMG/spx2-7.png" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Cây xương rồng</h5>
                                <div className="star">
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <i className="fa fa-star-half checked" aria-hidden="true">
                                    </i>
                                </div>
                                <p className="card-text">250000 đ <strike>250.000 đ</strike></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="../../IMG/spx2-12.png" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Cây dạ lam</h5>
                                <div className="star">
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <i className="fa fa-star-half checked" aria-hidden="true"> </i>
                                </div>
                                <p className="card-text">250000 đ <strike>250.000 đ</strike></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="../../IMG/spx2-11.png" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Cây dứa nhỏ</h5>
                                <div className="star">
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <i className="fa fa-star-half checked" aria-hidden="true"> </i>
                                </div>
                                <p className="card-text">250000 đ <strike>250.000 đ</strike></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="../../IMG/spx2-15.png" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Cây danh dự</h5>
                                <div className="star">
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <i className="fa fa-star-half checked" aria-hidden="true"> </i>
                                </div>
                                <p className="card-text">250000 đ <strike>250.000 đ</strike></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="../../IMG/spx2-3.png" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Cây đa gốc nhỏ</h5>
                                <div className="star">
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <i className="fa fa-star-half checked" aria-hidden="true"> </i>
                                </div>
                                <p className="card-text">250000 đ <strike>250.000 đ</strike></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="../../IMG/caydabupnho.png" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Cây đa búp nhỏ</h5>
                                <div className="star">
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <i className="fa fa-star-half checked" aria-hidden="true"> </i>
                                </div>
                                <p className="card-text">250000 đ <strike>250.000 đ</strike></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="../../IMG/spx2-12.png" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Cây dạ lam</h5>
                                <div className="star">
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <span className="fa fa-star checked" />
                                    <i className="fa fa-star-half checked" aria-hidden="true"> </i>
                                </div>
                                <p className="card-text">250000 đ <strike>250.000 đ</strike></p>
                            </div>
                        </div>
                    </div>
                    <div className="container-home__title__info">
                        <div className="title__info">
                            <p className="title__info__p">Tin tức</p>
                            <hr className="title__info__hr" />
                        </div>
                    </div>
                    <div className="container-home__info">
                        <div className="card mb-3"><img className="card-img-top" src="../../IMG/Hard-to-kill-indoor-plants.png" alt="" />
                            <div className="card-body"><i className="card-date">Thứ 3,ngày 7,tháng 5,năm 2019</i>
                                <p className="card-ten">15 thiết kế tuyệt đẹp vạn người mê</p>
                                <p className="card-detail">Khi bước từ ngoài ngõ vào hay từ trong nhà đi ra,góc sân luôn là điểm nhìn đầu tiên của chúng ta.</p><a href="/"><i className="text-cont">Đọc tiếp </i></a>
                            </div>
                        </div>
                        <div className="card mb-3"><img className="card-img-top" src="../../IMG/11248902_984651828231999_68851709_n.png" alt="" />
                            <div className="card-body"><i className="card-date">Thứ 3,ngày 7,tháng 5,năm 2019</i>
                                <p className="card-ten">Tạo tiểu cảnh góc sân cho nhà kiểu phố, biệt thự đẹp</p>
                                <p className="card-detail">Cùng Sài Gòn Hoa tìm hiểu một vài xu hướng thiết kế sấn vườn được ưa chuộng hiện nay nhé ! Kết hợp hàng rào</p><a href="/"><i className="text-cont">Đọc tiếp </i></a>
                            </div>
                        </div>
                        <div className="card mb-3"><img className="card-img-top" src="../../IMG/The_Sill_84_Hester.png" alt="" />
                            <div className="card-body"><i className="card-date">Thứ 3,ngày 7,tháng 5,năm 2019</i>
                                <p className="card-ten">Cách bố trí chậu hoa trước cửa ấn tượng</p>
                                <p className="card-detail">Như thể hiện sự thân thiên cũng như sự hiếu khách của gia chủ,phần không gian trước cửa</p><a href="/"><i className="text-cont">Đọc tiếp </i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { listproHot: state.ProductReducer }
}


const mapDispatchToProps = (dispatch) => {
    return {
        saveListCartDetail :() =>{
            dispatch(saveListCartDetail())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(home)
