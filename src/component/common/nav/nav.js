import React, { Component } from 'react';


class nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="/">Logo</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                      
                        <a className="nav-link" href="/">TRANG CHỦ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">GIỚI THIỆU</a>
                    </li>
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
                            SẢN PHẨM MỚI
      </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/">Link 1</a>
                            <a className="dropdown-item" href="/">Link 2</a>
                            <a className="dropdown-item" href="/">Link 3</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">TIN TỨC </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">LIÊN HỆ</a>
                    </li>
                </ul>
            </nav>

        );
    }
}

export default nav;