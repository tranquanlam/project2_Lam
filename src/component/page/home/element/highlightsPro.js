import React, { Component } from 'react';
import Cardbody from './hotPro/cardbody'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadProductHot } from '../../../../store/action/action'
import { BrowserRouter as Router, Link } from "react-router-dom";

class highlightsPro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hot0: '',
            hot1: '',
            hot2: '',
            hot3: '',
            hot4: '',
            hot5: '',
            listProHot: []
        }
        
    }
  
    async componentDidMount() {
        var strr = [];
        var hostPro = [];
        let userData = await axios.get('http://5d08a7b5034e5000140106c4.mockapi.io/api/products')
         .then(function (response) {
             response.data.forEach(element => {
                 strr.push(element);
             });
             for (let i = 0; i < strr.length; i++) {
                 for (let j = i; j < strr.length; j++) {
                     if (strr[i].amountbuy <= strr[j].amountbuy) {
                         let tam = strr[i]
                         strr[i] = strr[j]
                         strr[j] = tam
                     }
                 }
             }
             for (let i = 0; i < 6; i++) {
                 hostPro.push(strr[i])
                 
             } 
             return hostPro;
         }) 
         console.log(userData[0].id)
         this.setState({
             hot0 : userData[0].imageproduct,
             hot1 : userData[1].imageproduct,
             hot2 : userData[2].imageproduct,
             hot3 : userData[3].imageproduct,
             hot4 : userData[4].imageproduct,
             hot5 : userData[5].imageproduct,
            
         })
      }
    
    render() {
        return (
            <div className="container-home__best">
                <p className="container-home__best__p">Sản phẩm nổi bật {this.state.hot0}  </p>
                <hr className="container-home__best__hr" />
                <div className="container-home__best__list" id="container-home-featuredProducts">
                    <div className="container-home__best__list__list1">
                        <div className="container-home__best__list__list1__Cardbig">
                            <div className="card" id="pro-1" productid={1}>
                                <div className="card__status"><p className="card__status__p">New</p></div>
                                <div className="hovereffect">
                                    <Link  to='/detail' ><img className="img-responsive card-img-top" src={process.env.PUBLIC_URL + '/IMG/' + this.state.hot0} alt="" /></Link>
                                    <div className="overlay">
                                        <div className="card__action"><p className="card__status__p">MUA NGAY</p></div>
                                        <div className="card__search"><img src="../../IMG/icon-search-ct.png" alt="" /></div>
                                    </div>
                                </div>
                                <Cardbody></Cardbody>
                            </div>
                            <div className="container-home__best__list__list1__listCard">
                                <div className="card" id="pro-2" productid={2}>
                                    <div className="hovereffect">
                                        <img className="img-responsive card-img-top" src={process.env.PUBLIC_URL + '/IMG/' + this.state.hot1} alt="" />
                                        <div className="overlay" /></div>
                                    <Cardbody></Cardbody>
                                </div>
                                <div className="card" id="pro-3">
                                    <div className="hovereffect">
                                        <img className="img-responsive card-img-top" src={process.env.PUBLIC_URL + '/IMG/' + this.state.hot2} alt="" />
                                        <div className="overlay" /></div>
                                    <Cardbody></Cardbody>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-home__best__list__list2">
                        <div className="container-home__best__list__list2__listCard">
                            <div className="card"><div className="card__status">
                                <p className="card__status__p">-50%</p>
                            </div>
                                <div className="hovereffect">
                                    <img className="img-responsive card-img-top" src={process.env.PUBLIC_URL + '/IMG/' + this.state.hot3} alt="" />
                                    <div className="overlay" /></div>
                                <Cardbody></Cardbody>
                            </div>
                            <div className="card">
                                <div className="card__status">
                                    <p className="card__status__p">New</p>
                                </div>
                                <div className="hovereffect">
                                    <img className="img-responsive card-img-top" src={process.env.PUBLIC_URL + '/IMG/' + this.state.hot4} alt="" />
                                    <div className="overlay" />
                                </div>
                                <Cardbody></Cardbody>
                            </div>
                        </div>
                        <div className="container-home__best__list__list2__Cardbig">
                            <div className="card">
                                <div className="card__status">
                                    <p className="card__status__p">-50%</p>
                                </div>
                                <div className="hovereffect">
                                    <img className="img-responsive card-img-top" alt="" src={process.env.PUBLIC_URL + '/IMG/' + this.state.hot5} />
                                    <div className="overlay" /></div>
                                <Cardbody></Cardbody>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { listproHot: state.ProductReducer }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadProductHot: () => {
            dispatch(loadProductHot())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(highlightsPro);
