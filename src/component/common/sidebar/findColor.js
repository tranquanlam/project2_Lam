import React, { Component } from 'react';

class findColor extends Component {
    render() {
        return (
            <div className="content__classify__searchColor">
                            <div className="content__classify__searchColor__title">
                                <p className="content__classify__searchColor__title__p">Tìm theo màu</p>
                                <hr className="content__classify__searchColor__title__hr" />
                            </div>
                            <div className="content__classify__searchColor__content">
                                <div className="list1">
                                    <ul>
                                        <li><a href="/"><img src="../../IMG/Ellipse1.png" alt="" /> Xanh cây</a></li>
                                        <li><a href="/"><img src="../../IMG/Ellipse2.png" alt="" /> Tím</a></li>
                                        <li><a href="/"><img src="../../IMG/Ellipse3.png" alt="" /> Vàng</a></li>
                                    </ul>
                                </div>
                                <div className="list2">
                                    <ul>
                                        <li><a href="/"><img src="../../IMG/Ellipse4.png" alt="" /> Đỏ cam</a></li>
                                        <li><a href="/"><img src="../../IMG/Ellipse5.png" alt="" /> Xanh trời</a></li>
                                        <li><a href="/"><img src="../../IMG/Ellipse6.png" alt="" /> Hồng</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
        );
    }
}

export default findColor;