import React, { Component } from 'react';

class findPrice extends Component {
    render() {
        return (
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
        );
    }
}

export default findPrice;