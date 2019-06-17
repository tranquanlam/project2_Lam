import {CLICK_SAVE_LOGIN,GET_PRODUCT_BY_ID,GET_REDIRECT_CART} from './actionType'

export function savelogin (email){
    return {type:CLICK_SAVE_LOGIN ,email}
}

export function getProductOder (id){
    return {type:GET_PRODUCT_BY_ID,id}
}
export function ToPageCart (){
    return {type:GET_REDIRECT_CART}
}