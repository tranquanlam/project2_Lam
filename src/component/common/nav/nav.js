import React, { Component } from 'react';
import ItemNav from './iemtNav'


class nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="fontnavbar navbar-brand js-scroll-trigger" href="/">
                    <img alt="img" className="rounded-circle img-thumbnail imguser"  id="logo" src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/21616217_1951538581785407_7931691341819326103_n.jpg?_nc_cat=102&_nc_oc=AQmVJXGSJmINvDRFWXYsLDBb9828_8gVMZk9NTvdMnWT8OjR5c5UuM5MbOjATy24VuA&_nc_ht=scontent.fdad1-1.fna&oh=6dbcc10378dee5eed83492b2e524e2c7&oe=5D803D6D"  />   Xin chào {this.props.txtemail}
                </a>
                <ul className="navbar-nav">
                    <ItemNav title={"TRANG CHỦ"}></ItemNav>
                    <ItemNav title={"GIỚI THIỆU"}></ItemNav>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbardrop" data-toggle="dropdown">
                            SẢN PHẨM
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/">Link 1</a>
                            <a className="dropdown-item" href="/">Link 2</a>
                            <a className="dropdown-item" href="/">Link 3</a>
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
                    <ItemNav title={"TIN TỨC"}></ItemNav>
                    <ItemNav title={"LIÊN HỆ"}></ItemNav>
                </ul>
            </nav>
        );
    }
}

export default nav;