import { combineReducers } from  'redux'
import AcountReducer from './reducer/acount-reducer'
import ProductReducer from './reducer/product-reducer'
import LocalStorage from './reducer/localstorage-reducer'
import SortPro from './reducer/sort-reducer'

var redux = require('redux');

var st = combineReducers({
    AcountReducer : AcountReducer,
    ProductReducer : ProductReducer,
    LocalStorage : LocalStorage,
    SortPro : SortPro
})
var store = redux.createStore(st);
export default store;