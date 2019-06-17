import { combineReducers } from  'redux'
import AcountReducer from './reducer/acount-reducer'
import ProductReducer from './reducer/product-reducer'
import LocalStorage from './reducer/localstorage-reducer'
import SortPro from './reducer/sort-reducer'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

var redux = require('redux');

var st = combineReducers({
    AcountReducer : AcountReducer,
    ProductReducer : ProductReducer,
    LocalStorage : LocalStorage,
    SortPro : SortPro
})
var store = redux.createStore(st, applyMiddleware(thunk));
export default store;