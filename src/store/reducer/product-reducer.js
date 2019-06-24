import { LOAD_HOT_PRODUCT } from '../action/actionType'
import axios from 'axios'
const initialState = {
    hotproduct: [],
    text: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_HOT_PRODUCT:
            return loadProductHot(state)
        default:
            return state
    }
}

async function loadProductHot(state) {
    var strr = [];
    var hostPro = [];

    let data = await axios.get('http://5d08a7b5034e5000140106c4.mockapi.io/api/products')
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
        .catch(function (error) {
            console.log(error);
        });
        console.log("axios");
        hostPro.forEach(element => {
        console.log(element)
            });
        state = {...state,hotproduct : data}
    return state
}