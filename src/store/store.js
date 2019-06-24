import { combineReducers } from  'redux'
import AcountReducer from './reducer/acount-reducer'
import ProductReducer from './reducer/product-reducer'

var redux = require('redux');

var st = combineReducers({
    AcountReducer : AcountReducer,
    ProductReducer : ProductReducer
})
var store = redux.createStore(st);
export default store;