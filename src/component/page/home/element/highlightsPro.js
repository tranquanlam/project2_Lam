import React, { Component } from 'react';
import Cardbody from './hotPro/cardbody'
import axios from 'axios'
import { connect } from 'react-redux'
import { getProductOder } from '../../../../store/action/action'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Redirect from 'react-router-dom/Redirect'
import Loading from '../../../common/loading/loading'

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
            listproHot: [],
            YesNCPage: 0
        }
    }

    async componentDidMount() {
        var strr = [];
        var hostPro = [];
        var ProData = await axios.get('http://5d08a7b5034e5000140106c4.mockapi.io/api/products')
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

        this.setState({
            listproHot: ProData,
            hot0: ProData[0].imageproduct,
            hot1: ProData[1].imageproduct,
            hot2: ProData[2].imageproduct,
            hot3: ProData[3].imageproduct,
            hot4: ProData[4].imageproduct,
            hot5: ProData[5].imageproduct,
            IDsp1: ProData[0].id,
            IDsp2: ProData[1].id,
            IDsp3: ProData[2].id,
            IDsp4: ProData[3].id,
            IDsp5: ProData[4].id,
            IDsp6: ProData[5].id,
            Namesp1: ProData[0].productName,
            Namesp2: ProData[1].productName,
            Namesp3: ProData[2].productName,
            Namesp4: ProData[3].productName,
            Namesp5: ProData[4].productName,
            Namesp6: ProData[5].productName,
            Pricesp1: ProData[0].price,
            Pricesp2: ProData[1].price,
            Pricesp3: ProData[2].price,
            Pricesp4: ProData[3].price,
            Pricesp5: ProData[4].price,
            Pricesp6: ProData[5].price
        })
    }
    viewDetail = async (id) => {
        this.props.getProductOder(id);
        this.setState({
            YesNCPage: id
        })
    }

    render() {
        if (this.state.YesNCPage === true) {
            return <Redirect
                to={{
                    pathname: "/detail",
                }} />
        }
        return (
            <div className="container-home__best">
                <p className="container-home__best__p">Sản phẩm nổi bật  </p>
                <hr className="container-home__best__hr" />
                {
                    this.props.listproHot.isFetching && <Loading></Loading>
                }

                {
                    !this.props.listproHot.isFetching && <div className="container-home__best__list" id="container-home-featuredProducts">
                        <div className="container-home__best__list__list1">
                            <div className="container-home__best__list__list1__Cardbig">
                                <div className="card" id="pro-1" productid={1}>
                                    <div className="card__status"><p className="card__status__p">New</p></div>
                                    <div className="hovereffect">
                                        <img onClick={() => this.viewDetail(this.state.IDsp1)} className="img-responsive card-img-top" src={process.env.PUBLIC_URL + '/IMG/' + this.state.hot0} alt="" />
                                        <div className="overlay">
                                            <div className="card__action"><p className="card__status__p">  <Link to='/detail' >MUA NGAY</Link> </p></div>
                                            <div className="card__search"><img src="../../IMG/icon-search-ct.png" alt="" /></div>
                                        </div>
                                    </div>
                                    <Link onClick={() => this.viewDetail(this.state.IDsp1)} to='/detail' ><Cardbody PricePro={this.state.Pricesp1} NamePro={this.state.Namesp1}></Cardbody></Link>
                                </div>
                                <div className="container-home__best__list__list1__listCard">
                                    <div className="card" id="pro-2" productid={2}>
                                        <div className="hovereffect">
                                            <img className="img-responsive card-img-top" src={process.env.PUBLIC_URL + '/IMG/' + this.state.hot1} alt="" />
                                            <div className="overlay" /></div>
                                        <Link onClick={() => this.viewDetail(this.state.IDsp2)} to='/detail' ><Cardbody PricePro={this.state.Pricesp2} NamePro={this.state.Namesp2}></Cardbody></Link>
                                    </div>
                                    <div className="card" id="pro-3">
                                        <div className="hovereffect">
                                            <img className="img-responsive card-img-top" src={process.env.PUBLIC_URL + '/IMG/' + this.state.hot2} alt="" />
                                            <div className="overlay" /></div>
                                        <Link onClick={() => this.viewDetail(this.state.IDsp3)} to='/detail' ><Cardbody PricePro={this.state.Pricesp3} NamePro={this.state.Namesp3}></Cardbody></Link>
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
                                    <Link onClick={() => this.viewDetail(this.state.IDsp4)} to='/detail' ><Cardbody PricePro={this.state.Pricesp4} NamePro={this.state.Namesp4}></Cardbody></Link>
                                </div>
                                <div className="card">
                                    <div className="card__status">
                                        <p className="card__status__p">New</p>
                                    </div>
                                    <div className="hovereffect">
                                        <img className="img-responsive card-img-top" src={process.env.PUBLIC_URL + '/IMG/' + this.state.hot4} alt="" />
                                        <div className="overlay" />
                                    </div>
                                    <Link onClick={() => this.viewDetail(this.state.IDsp5)} to='/detail' ><Cardbody PricePro={this.state.Pricesp5} NamePro={this.state.Namesp5}></Cardbody></Link>
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
                                    <Link onClick={() => this.viewDetail(this.state.IDsp6)} to='/detail' ><Cardbody PricePro={this.state.Pricesp6} NamePro={this.state.Namesp6}></Cardbody></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { listproHot: state.ProductReducer }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductOder: (id) => {
            dispatch(getProductOder(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(highlightsPro);
