import React, { Component } from 'react';

class sidebar extends Component {
    render() {
        return (
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
        );
    }
}

export default sidebar;