import React, { Component } from 'react';
import Sidebar from '../../common/sidebar/sidebar'
import FindPrice from '../../common/sidebar/findPrice'
import FindColor from '../../common/sidebar/findColor'
import CardProduct from './element/cardPro'
import { connect } from 'react-redux'
import { sortName } from '../../../store/action/actionSort'
import Contact from '../../common/contact/contact'
import Headers from '../../common/header/header'
import Nav from '../../common/nav/nav'

class listproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listproduct: []
        }
    }
    componentDidMount() {
        this.setState({
            listproduct: this.props.sortPro.sortPro
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.sortPro.sortPro !== prevState.listproduct) {
            return { listproduct: nextProps.sortPro.sortPro };
        }
        else return null;
    }

    sortName = async () => {
        this.props.sortNameProduct(this.state.listproduct);
        // this.setState({
        //     listproduct: this.props.sortPro.sortPro
        // })
    }
    render() {
        let listP = this.state.listproduct
        if (!listP) listP = []
        return (
            <div>
                <Contact></Contact>
                <Headers></Headers>
                <Nav></Nav>
                <div className="contentMainlist">
                    <div className="addressLocal"><a className="addressLocal__a" href="/">Home</a><a className="addressLocal__a1" href>/Danh sách sản phẩm</a></div>
                    <div className="content">
                        <div className="content__classify">
                            <Sidebar></Sidebar>
                            <FindPrice></FindPrice>
                            <FindColor></FindColor>
                        </div>
                        <div className="content__listProduct"><img className="firstImg" src="../../IMG/The_Sill_84_Hester2.png" alt="" />
                            <div className="content__listProduct__control"><a className="listGrid" href="/"><img src="../../IMG/listGrid.png" alt="" /></a><a className="listRow" href><img src="../../IMG/list.png" alt="" /></a>
                                <div className="content__listProduct__control__SortName">
                                    <p>Sắp xếp theo tên</p>
                                    <div class="dropdown">
                                        <button onClick={() => this.sortName()} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Sắp xếp theo tên</button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" onClick={() => this.sortName()} >Sắp xếp theo giá</a>
                                            <a class="dropdown-item" >Another action</a>
                                            <a class="dropdown-item" >Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="content__listProduct__control__numberElement">
                                    <p>Show</p>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            10</button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="/">20</a>
                                            <a class="dropdown-item" href="/">30</a>
                                            <a class="dropdown-item" href="/">40</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content__listProduct__display">
                                {
                                    listP.map((value, key) => (
                                        <CardProduct key={key} NamePro={value.productName} PricePro={value.price} imagepPro={value.imageproduct}></CardProduct>
                                    ))
                                }
                                <div className="content__listProduct__display__numberPage">
                                    <ul>
                                        <li className="li1"><a href="/">Trang trước</a></li>
                                        <li className="li2"><a href="/">1</a></li>
                                        <li className="li2"><a href="/">2</a></li>
                                        <li className="li3"><a href="/">3</a></li>
                                        <li className="li4"><a href="/">4</a></li>
                                        <li className="li5"><a href="/">Trang cuối                             </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listpro: state.ProductReducer,
        sortPro: state.SortPro
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortNameProduct: (listPro) => {
            dispatch(sortName(listPro))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(listproduct);