import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import OwlCarousel from 'react-owl-carousel2';

class decriptionPro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productD: '',
            category: 1,
            differentProduct: [],
            txtNo: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }
    async componentDidMount() {
        //lấy danh sách product
        let data = await axios.get('http://5d08a7b5034e5000140106c4.mockapi.io/api/products')
            .then(function (response) {
                return response.data
            })
        //lấy sản phẩm và loại sản phẩm show lên detail
        data.forEach(element => {
            if (element.id === this.props.listproHot.id) {
                this.setState({
                    productD: element,
                    category: element.catagory
                })
            }
        });
        //tìm những sản phẩm có cùng category
        data.forEach(element => {
            if (element.catagory === this.state.category) {
                this.setState({
                    differentProduct: [...this.state.differentProduct, element]
                })
            }
        });
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    addProduct = (id) => {
        let numb = this.state.txtNo + 1;
        this.setState({
            txtNo: numb
        })
    }
    reductionProduct = (id) => {
        if (this.state.txtNo > 0) {
            let numb = this.state.txtNo - 1;
            this.setState({
                txtNo: numb
            })
        }
    }
    addCart = (id) => {
        //Neu login thi moi cho them du lieu vao cart Detail
        if (this.props.acountReducer.name !== "") {




            //XỬ LÝ TRÊN API VỚI GIỎ HÀNG        
            //lay id card trong store để mua them sản phẩm
            let idcart
            this.props.listproHot.listCardUser.forEach(element => {
                if (element.idUser === this.props.acountReducer.id) {
                    idcart = element.idCart
                }
            });
            // neu id card và id pro đã có trong API thì chỉ cần cộng thêm vào ( to action redux)
            var cartDetailItem
            var idDetail
            var isHas = true
            this.props.listproHot.listCardDetail.forEach(element => {
                if (element.idCard === idcart && element.idProduct === id) {
                    cartDetailItem = {
                        idCard: idcart,
                        idProduct: id,
                        Price: this.state.productD.price,
                        Amount: this.state.txtNo,
                        Sum: (this.state.txtNo * this.state.productD.price)
                    }
                    idDetail = element.id
                    isHas = false
                }
            });
            //update API 
            if (isHas === false) {
                axios.put(`http://5d08a7b5034e5000140106c4.mockapi.io/api/cartDetail/${idDetail}`, { ...cartDetailItem })
            } else {
                cartDetailItem = {
                    idCard: idcart,
                    idProduct: id,
                    Price: this.state.productD.price,
                    Amount: this.state.txtNo,
                    Sum: (this.state.txtNo * this.state.productD.price)
                }
                axios.post(`http://5d08a7b5034e5000140106c4.mockapi.io/api/cartDetail`, { ...cartDetailItem })
            }

        }
    }
    render() {
        let infoDetailPro = this.state.productD
        let differentProduct = this.state.differentProduct
        if (!infoDetailPro) infoDetailPro = {};
        if (!differentProduct) differentProduct = []
        const options = {
            items: 5,
            margin: 10,
            autoWidth: false,
            responsive: false,
            dots: false
        };
        return (
            <div className="detail">
                <div className="detail__content">
                    <div className="detail__content__container">
                        <div className="detail__content__container__mySlides">
                            <div className="mySlides" style={{ display: 'block' }}>
                                <div className="numbertext" /><img src={process.env.PUBLIC_URL + '/IMG/' + infoDetailPro.imageproduct} style={{ width: '100%' }} alt="" />
                            </div>
                        </div>
                        <OwlCarousel
                            ref="car"
                            options={options}
                        >{
                                differentProduct.map((element, key) => (
                                    <div key={key} className=""><img className="demo cursor active" src={process.env.PUBLIC_URL + '/IMG/' + element.imageproduct} alt="The Woods" /></div>
                                ))
                            }
                        </OwlCarousel>
                    </div>
                    <div className="detail__content__info">
                        <div className="detail__content__info__title">
                            <p>{infoDetailPro.productName}</p>
                            <div className="star"><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><span className="fa fa-star checked" /><i className="fa fa-star-half checked" aria-hidden="true"> </i></div>
                            <p className="price">{infoDetailPro.price} đ</p>
                        </div>
                        <hr />
                        <div className="detail__content__info__decription">
                            <p>Cây mọc bụi thưa, thân vươn thẳng với chiều cao trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên,gân lá nổi rõ, phiến rộng khoảng từ 15-20cm.Lá có màu xanh đậm ở mặt trên, quanh gân có màu trắng sữa; mặt dưới lá nhạt màu hơn.Lá cây dạ lam mọc cánh, cuống lá dài khi rụng để lại các khía màu nâu nhạt. </p>
                        </div>
                        <hr />
                        <div className="detail__content__info__number">
                            <p>Số lượng</p>
                            <div style={{ width: '50px', height: '50px' }} className="btn btn-danger" onClick={() => this.reductionProduct(infoDetailPro.id)}>
                                <p>-</p>
                            </div>
                            <input style={{ width: '100px', height: '50px' }} onChange={(event) => this.handleChange(event)} name="txtNo" value={this.state.txtNo}></input>
                            <div style={{ width: '50px', height: '50px' }} className="btn btn-success" onClick={() => this.addProduct(infoDetailPro.id)}>
                                <p>+</p>
                            </div>
                        </div>
                        <hr />
                        <div className="detail__content__info__action">
                            <div className="card-body__action">
                                <div className="card-body__action__buy" onClick={() => this.addCart(infoDetailPro.id)}>MUA NGAY</div>
                                <div className="card-body__action__seach"><a href="/"><img src="../../IMG/icon-search-ct.png" alt="" /></a></div>
                                <div className="card-body__action__love"><a href="/"><img src="../../IMG/heart.png" alt="" /></a></div>
                            </div>
                        </div>
                        <hr />
                        <div className="detail__content__info__connect"><img src="../../IMG/fatw6.png" alt="" /></div>
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
        );
    }
}
const mapStateToProps = (state) => {
    return {
        listproHot: state.ProductReducer,
        acountReducer: state.AcountReducer
    }
}

export default connect(mapStateToProps)(decriptionPro);