import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Imgfacebook from '../../IMG/icon-facebook.png'
import Imgtwier from '../../IMG/icon-twier.png'
import Imgt from '../../IMG/icon-t.png'
import Imgv from '../../IMG/icon-v.png'
import ImgLogin from '../../IMG/icon-DangNhap.png'
import ImgSigin from '../../IMG/icon-dangky.png'

class contact extends Component {
    render() {
        return (
            <div className="lcontact  text-white nav navbar-nav list-inline" >
                <ul className="row">
                    <li className="list-inline-item col-3 offset-md-1 ">
                        <p>Open time 8:00-18:00 Monday-Sunday</p>
                    </li>
                    <li className="list-inline-item " ><a href="/"><img src={Imgfacebook} alt="" /></a></li>
                    <li className="list-inline-item "><a href="/"><img src={Imgtwier} alt="" /></a></li>
                    <li className="list-inline-item "><a href="/"><img src={Imgt} alt="" /></a></li>
                    <li className="list-inline-item "><a href="/"><img src={Imgv} alt="" /></a></li>
                    <li className="list-inline-item col-3 offset-md-1"><Link  to="/login"><img src={ImgLogin} alt="" />Login</Link></li>
                    <li className="list-inline-item col-3"><Link  to="/login"><img src={ImgSigin} alt="" />Login</Link></li>
                </ul>
            </div>
        );
    }
}

export default contact;