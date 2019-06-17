import {
    CLICK_SAVE_LOGIN,
    GET_PRODUCT_BY_ID,
    GET_REDIRECT_CART,
    SAVE_LIST_CART,
    SAVE_LIST_CART_DETAIL,
    SAVE_ADD_CART_LOCALSTORAGE,
    DETELE_ITEM_LOCALSTORAGE,
    UPDATE_USER,
    FIND_CATEGORY,
    DETELE_ITEM_API,
    SAVE_PAYMENT_APT
} from './actionType'
import axios from 'axios'

export function savelogin(name, id,user) {
    return { type: CLICK_SAVE_LOGIN, name: name, id: id,user }
}
export function updateUser(name,email,phone,id) {
    return { type: UPDATE_USER, name,email,phone,id }
}
export function getProductOder(id) {
    return { type: GET_PRODUCT_BY_ID, id }
}
export function ToPageCart() {
    return { type: GET_REDIRECT_CART }
}
export function saveListCart(listCart) {
    return { type: SAVE_LIST_CART, listCart }
}
export function saveListCartDetail(listCardDetail) {
    return { type: SAVE_LIST_CART_DETAIL, listCardDetail }
}
export function saveAddCartLocalStorage (item,amount,idUser) {
    return { type: SAVE_ADD_CART_LOCALSTORAGE,item,amount,idUser}
}
export function deteleItemCard (idPro,idUser) {
    return { type:DETELE_ITEM_LOCALSTORAGE ,idPro,idUser}
}
export function findcategory (data,cate){
    return { type:FIND_CATEGORY, data,cate}
}
export function deteleitemAPI(idPro,idUser){
    return {type: DETELE_ITEM_API,idPro,idUser}
}
export function savePaymentAPI(idUser,sum){
    return {type: SAVE_PAYMENT_APT,idUser,sum}
}

export function getData() {
    return {
      type: 'FETCHING_DATA'
    }
  }
  
const apiUrl = 'http://5d08a7b5034e5000140106c4.mockapi.io/api/products';

export const fetchData = (data) => {
  return {
    type: 'DATA_PRODUCT_THUNK',
    data
  }
};

export const fetchGithubData = () => {
  return (dispatch) => {
    dispatch(getData())
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};