import { GET_PRODUCT_BY_ID, GET_REDIRECT_CART, SAVE_LIST_CART, SAVE_LIST_CART_DETAIL } from '../action/actionType'
import axios from 'axios'

const initialState = {
    id: 0,
    ToYesNoCart: false,
    listCardUser: [],
    listCardDetail: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_BY_ID:
            state = { ...state, id: action.id }
            return state
        //chuyen trang cart do router khong the nhieu hon kiem soat cua 1 component
        case GET_REDIRECT_CART:
            let YN = !state.ToYesNoCart
            state = { ...state, ToYesNoCart: YN }
            return state
        //luu list cart cua user len day
        case SAVE_LIST_CART:
            state = { ...state, listCardUser: action.listCart }
            return state
        //luu list cart detail
        case SAVE_LIST_CART_DETAIL:
            state = { ...state, listCardDetail: action.listCardDetail }
            return state
        default:
            return state
    }
}
// function saveListCardDetail(state, action) {
//     state = { ...state, listCardDetail: action.listDetail }
//     console.log(state);
//     return state;
// }
