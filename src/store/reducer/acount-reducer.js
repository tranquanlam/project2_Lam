import {CLICK_SAVE_LOGIN} from '../action/actionType'

var product = { 
  amount: [],
  name: "",
  id : 0
}
export default function (state = product, action) {
    switch (action.type) {
      case CLICK_SAVE_LOGIN:
       
        return saveClick(state,action)
      default:
        return state
    }
  }
  function saveClick(state,action){
    state = {...state,name : action.name,id : action.id};
    return state;
  }
