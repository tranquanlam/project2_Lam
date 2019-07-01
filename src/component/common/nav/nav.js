import React, { Component } from 'react';
import ItemNav from './iemtNav'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { sortByType1,sortByType2 } from '../../../store/action/actionSort'

class nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.dbPro.name
        }
    }
    sort1 = () => {
       this.props.sortCateType1(this.props.listproHot.listProducts)
    }
    sort2 = () => {
        this.props.sortCateType2(this.props.listproHot.listProducts)
     }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="fontnavbar navbar-brand js-scroll-trigger" href="/">
                    <img alt="img" className="rounded-circle img-thumbnail imguser" id="logo" src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/21616217_1951538581785407_7931691341819326103_n.jpg?_nc_cat=102&_nc_oc=AQmVJXGSJmINvDRFWXYsLDBb9828_8gVMZk9NTvdMnWT8OjR5c5UuM5MbOjATy24VuA&_nc_ht=scontent.fdad1-1.fna&oh=6dbcc10378dee5eed83492b2e524e2c7&oe=5D803D6D" />   Xin chào {this.props.dbPro.name}
                </a>
                <ul className="navbar-nav">
                    <Link to="/"><ItemNav title={"TRANG CHỦ"}></ItemNav></Link>
                    <Link to="/"><ItemNav title={"GIỚI THIỆU"}></ItemNav></Link>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/listProduct" id="navbardrop" data-toggle="dropdown">
                            SẢN PHẨM
                        </a>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" onClick={() => this.sort1()} to="/listProduct">Cây chậu treo </Link>
                            <Link className="dropdown-item" onClick={() => this.sort2()} to="/listProduct">Cây hoa cỏ </Link>
                            <Link className="dropdown-item" to="/listProduct">Cây dây leo</Link>
                            <Link className="dropdown-item" to="/listProduct">Cây trang trí</Link>
                            <Link className="dropdown-item" to="/listProduct">Cây cây để bàn</Link>
                            <Link className="dropdown-item" to="/listProduct">Cây cây nội thất</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbardrop" data-toggle="dropdown">
                            SẢN PHẨM MỚI </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/">Link 1</a>
                            <a className="dropdown-item" href="/">Link 2</a>
                            <a className="dropdown-item" href="/">Link 3</a>
                        </div>
                    </li>
                    <li><Link className="nav-link" to="/detailNew">  TIN TỨC </Link></li>
                    <li><Link className="nav-link" to="/infoUser"> LIÊN HỆ </Link></li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dbPro: state.AcountReducer,
        listproHot: state.ProductReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortCateType1: (listPro) => {
            dispatch(sortByType1(listPro))
        },
        sortCateType2: (listPro) => {
            dispatch(sortByType2(listPro))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(nav)
