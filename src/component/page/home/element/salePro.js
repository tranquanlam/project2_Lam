import React, { Component } from 'react';
import CardSale from './hotPro/cardsale'
import OwlCarousel from 'react-owl-carousel2';
import './hotPro/owl.theme.default.css';
import './hotPro/style.css';
import { connect } from 'react-redux';

class salePro extends Component {
   
    render() {
        const options = {
            startPosition :3,
            items: 3,
            rewind: true,
            margin: 30,
            autoWidth: false,
            responsive :false,
            dots : false,
            autoplay: true,
            loop :true,
            stageElement :'div'
        };
        return (
            <div className="container-home__sell__list__sale" id="container-home__sell__list__sale">
                <OwlCarousel
                    ref="car"
                    options={options}
                >
                    {
                        this.props.listproHot.listProducts.map((value,key)=>(
                            <CardSale key={key} namePro={value.productName} imagePro={value.imageproduct}></CardSale>
                        ))
                    }
                </OwlCarousel>
                <OwlCarousel
                    ref="car"
                    options={options}
                >
                   {
                        this.props.listproHot.listProducts.map((value,key)=>(
                            <CardSale key={key} namePro={value.productName} imagePro={value.imageproduct}></CardSale>
                        ))
                    }
                </OwlCarousel>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { listproHot: state.ProductReducer }
}
export default connect(mapStateToProps) (salePro);