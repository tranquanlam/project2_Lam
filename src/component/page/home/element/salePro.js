import React, { Component } from 'react';
import CardSale from './hotPro/cardsale'
import OwlCarousel from 'react-owl-carousel2';
import './hotPro/owl.theme.default.css';
import './hotPro/style.css';

class salePro extends Component {
   
    render() {
        const options = {
            items: 3,
            margin: 30,
            autoWidth: false,
            responsive :false,
            dots : false
        };
        return (
            <div className="container-home__sell__list__sale" id="container-home__sell__list__sale">
                <OwlCarousel
                    ref="car"
                    options={options}
                >
                    <CardSale></CardSale>
                    <CardSale></CardSale>
                    <CardSale></CardSale>
                    <CardSale></CardSale>
                    <CardSale></CardSale>
                    <CardSale></CardSale>
                </OwlCarousel>
                <OwlCarousel
                    ref="car"
                    options={options}
                >
                    <CardSale></CardSale>
                    <CardSale></CardSale>
                    <CardSale></CardSale>
                    <CardSale></CardSale>
                    <CardSale></CardSale>
                    <CardSale></CardSale>
                </OwlCarousel>
            </div>
        );
    }
}

export default salePro;