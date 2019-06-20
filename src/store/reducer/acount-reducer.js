import {CLICK_SAVE_LOGIN} from '../action/actionType'

var product = { 
  amount: [],
  name: ""
}
export default function (state = product, action) {
    switch (action.type) {
      case CLICK_SAVE_LOGIN:
          console.log("reducer");
        return saveClick(state,action)
      default:
        return state
    }
  }
  function saveClick(state,action){
    console.log(action.email)
    state = {...state,name : action.email};
    return state;
  }
