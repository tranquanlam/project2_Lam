import {CLICK_SAVE_LOGIN,LOAD_HOT_PRODUCT} from './actionType'

export function savelogin (email){
    return {type:CLICK_SAVE_LOGIN ,email}
}
export function loadProductHot (){
    return {type:LOAD_HOT_PRODUCT}
}