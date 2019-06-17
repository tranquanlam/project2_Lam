import React, { Component } from 'react'
import ImgPanner1 from '../../IMG/hoa-panner1.png'
import ImgPanner2 from '../../IMG/hoa-panner2.png'
import Nav from '../nav/nav'
export default class header extends Component {
    render() {
        return (
            <header>
                    <div className="action " >
                        <ul className="action__ul ">
                            <li className="li-1">
                                <p className="li-p1">Green Shop</p>
                                <p className="li-p2">Món quà từ thiên nhiên</p>
                            </li>
                            <li className="li-2">
                                <div className="divImg"><img className="img1" src={ImgPanner1} alt="" /><img className="img2" src={ImgPanner2} alt="" /></div>
                            </li>
                            <li className="li-3">
                                <p>Hỗ trợ : (04) 6674 2332 - (04) 3786 8904</p>
                                <div className="search">
                                    <form action="true" method="get">
                                        <input className="text" /><img src="../../../IMG/icon-search.png" alt="" />
                                    </form>
                                </div>
                            </li>
                            <li className="li-4">
                                <p className="li-4-p"> 0 Sản phẩm &nbsp;&nbsp;&nbsp;&nbsp;<img src="../../../IMG/icon-Gio-Hang.png" alt="" /></p>
                            </li>
                        </ul>
                        <Nav></Nav>
                    </div>
                    
                </header>
        )
    }
}
