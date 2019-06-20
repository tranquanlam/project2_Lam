import { combineReducers } from  'redux'
import AcountReducer from './reducer/acount-reducer'

var redux = require('redux');

var st = combineReducers({
    AcountReducer : AcountReducer
})
var store = redux.createStore(st);
export default store;