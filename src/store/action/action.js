import {CLICK_SAVE_LOGIN,GET_PRODUCT_BY_ID,GET_REDIRECT_CART,SAVE_LIST_CART,SAVE_LIST_CART_DETAIL} from './actionType'

export function savelogin (name,id){
    return {type:CLICK_SAVE_LOGIN,name : name,id :id}
}
export function getProductOder (id){
    return {type:GET_PRODUCT_BY_ID,id}
}
export function ToPageCart (){
    return {type:GET_REDIRECT_CART}
}
export function saveListCart (listCart){
    return {type:SAVE_LIST_CART,listCart}
}
export function saveListCartDetail (listCardDetail){
    return {type:SAVE_LIST_CART_DETAIL,listCardDetail}
}