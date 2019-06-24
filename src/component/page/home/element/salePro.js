import React, { Component } from 'react';
import CardSale from './hotPro/cardsale'
import CardBody from './hotPro/cardbody'
import OwlCarousel from 'react-owl-carousel2';
import './hotPro/owl.theme.default.css';
import './hotPro/style.css';

class salePro extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items: [
                <div key={1} className="item"><img src="https://lh5.googleusercontent.com/-FPoQ0SQ-Hf0/WpN8B27b5uI/AAAAAAAACVg/tV84qCMT2L8wFfc8jr_5DU0UtHPuqQP3wCLcBGAs/w100-h100-p-k-no-nu/1.jpg" alt="The Last of us" /></div>,
                <div key={2} className="item"><img src="https://lh5.googleusercontent.com/-FPoQ0SQ-Hf0/WpN8B27b5uI/AAAAAAAACVg/tV84qCMT2L8wFfc8jr_5DU0UtHPuqQP3wCLcBGAs/w100-h100-p-k-no-nu/1.jpg" alt="GTA V" /></div>,
                <div key={3} className="item"><img src="https://lh5.googleusercontent.com/-FPoQ0SQ-Hf0/WpN8B27b5uI/AAAAAAAACVg/tV84qCMT2L8wFfc8jr_5DU0UtHPuqQP3wCLcBGAs/w100-h100-p-k-no-nu/1.jpg" alt="Mirror Edge" /></div>,
                <div key={4} className="item"><img src="https://lh5.googleusercontent.com/-FPoQ0SQ-Hf0/WpN8B27b5uI/AAAAAAAACVg/tV84qCMT2L8wFfc8jr_5DU0UtHPuqQP3wCLcBGAs/w100-h100-p-k-no-nu/1.jpg" alt="Mirror Edge" /></div>,
                <div key={5} className="item"><img src="https://lh5.googleusercontent.com/-FPoQ0SQ-Hf0/WpN8B27b5uI/AAAAAAAACVg/tV84qCMT2L8wFfc8jr_5DU0UtHPuqQP3wCLcBGAs/w100-h100-p-k-no-nu/1.jpg" alt="Mirror Edge" /></div>,
            ],
            item: 3,
            loop: false,
            nav: false,
            rewind: true,
            autoplay: false,
            margin: 50,
            autoWidth: true,
            dotData : false
        };
    }
    startPlay() {
        this.setState({
            autoplay: true
        });
    }

    stopPlay() {
        this.setState({
            autoplay: false
        });
    }

    addItem() {
        let items = this.state.items;
        let newItem = <div key={this.state.items.length + 1} className="item"><img src="/img/fullimage2.jpg" alt="GTA V" /></div>;
        items.push(newItem);
        this.setState({ items });
    }

    newOptions() {
        this.setState({
            nav: true // Show next and prev buttons
        });
    }
    render() {
        const options = {
            items: 3,
            margin: 30,
            autoWidth: false,
            responsive :false,
            dots : false
        };
        const events = {
            onDragged: function (event) { console.log('onDragged: ' + event.type); },
            onChanged: function (event) { console.log('onChanged: ' + event.type); },
            onTranslate: function (event) { console.log('onTranslate: ' + event.type); }
        };
        return (
            <div className="container-home__sell__list__sale" id="container-home__sell__list__sale">
                <OwlCarousel
                    ref="car"
                    options={options}
                    events={events}
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
                    events={events}
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