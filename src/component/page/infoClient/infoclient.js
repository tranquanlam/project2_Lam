import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateUser } from '../../../store/action/action'
import Redirect from 'react-router-dom/Redirect'
import Contact from '../../common/contact/contact'
import Headers from '../../common/header/header'
import Nav from '../../common/nav/nav'

class infoclient extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtName: '',
            txtEmail: '',
            txtphone: '',
            toPageLogin: false
        }
    }
    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    componentDidMount() {
        if (this.props.dbPro.id !== 0) {
            this.setState({
                txtName: this.props.dbPro.user.name,
                txtEmail: this.props.dbPro.user.email,
                txtphone: this.props.dbPro.user.phone
            })
        }
    }
    updateuser = (name, email, phone, id) => {
        this.props.updateUser(name, email, phone, id)
        this.setState({
            toPageLogin: true
        })
    }
    render() {
        if (this.state.toPageLogin === true) {
            return <Redirect to="/login"></Redirect>
        }
        return (
            <div>
                <Contact></Contact>
                <Headers></Headers>
                <Nav></Nav>
                <div className="mapConnect">
                    <div id="googleMap" style={{ width: '100%', height: '400px', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: '100%', position: 'absolute', top: '0px', left: '0px', backgroundColor: 'rgb(229, 227, 223)' }}>
                            <div className="gm-err-container">
                                <div className="gm-err-content">
                                    <div className="gm-err-icon">
                                        <img src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png" draggable="false" style={{ userSelect: 'none' }} />
                                    </div>
                                    <div className="gm-err-title">Rất tiếc! Đã xảy ra lỗi.</div>
                                    <div className="gm-err-message">Trang này đã không tải Google Maps đúng cách. Hãy xem bảng điều khiển JavaScript để biết chi tiết kỹ thuật.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="contact__form">
                            <div className="contact__form__title">
                                <p>THÔNG TIN LIÊN HỆ</p>
                            </div>
                            <form action method="get">
                                <label htmlFor="name">Họ và tên :</label>
                                <input id="name" name="txtName" type="text" defaultValue={this.state.txtEmail} onChange={(event) => this.handleChange(event)} />
                                <label htmlFor="email">Địa chỉ email :</label>
                                <input id="email" name="txtEmail" type="email" defaultValue={this.state.txtName} onChange={(event) => this.handleChange(event)} />
                                <label htmlFor="phone">Số điện thoại :</label>
                                <input id="phone" name="txtphone" type="text" defaultValue={this.state.txtphone} onChange={(event) => this.handleChange(event)} />
                                <label htmlFor="comment">Bình luận</label>
                                <input id="comment" type="text" />
                            </form>
                        </div>
                        <div className="contact__title">
                            <div className="elemenPage__info">
                                <p className="elemenPage__info__p1">Green Shop</p>
                                <p className="elemenPage__info__p2">Món quà từ thiên nhiên</p>
                                <p>DKT được thành lập với niềm đam mê bắt Khát Vọng thành công trong lĩnh vực thương mại điện tử Chúng tôi đã và đang khẳng định được vị trí hàng đầu bằng những sản phẩm</p>
                                <div className="date"> <img src="../../IMG/11lien-he_03.png" alt="" />Điện thoại: 0164 579 4111</div>
                                <div className="time"><img src="../../IMG/11lien-he_05.png" alt="" />Email :quanlamtran@gmai.com</div>
                                <div className="sign-btn" onClick={() => this.updateuser(this.state.txtName, this.state.txtEmail, this.state.txtphone, this.props.dbPro.id)}>SỬA</div>
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
        dbPro: state.AcountReducer,
        dbCart: state.ProductReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (name, email, phone, id) => {
            dispatch(updateUser(name, email, phone, id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(infoclient);