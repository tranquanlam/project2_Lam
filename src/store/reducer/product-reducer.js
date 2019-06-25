import { GET_PRODUCT_BY_ID,GET_REDIRECT_CART } from '../action/actionType'
const initialState = {
    id: 0,
    ToYesNoCart: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_BY_ID:
            console.log(action.id);
            state = { ...state, id: action.id }
            return state
        case GET_REDIRECT_CART:
            let YN = !state.ToYesNoCart
            state = { ...state, ToYesNoCart : YN}
            return state
        default:
            return state
    }
}