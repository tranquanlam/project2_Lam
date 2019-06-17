import {
    GET_PRODUCT_BY_ID,
    GET_REDIRECT_CART,
    SAVE_LIST_CART,
    SAVE_LIST_CART_DETAIL,
    FIND_CATEGORY,
    DETELE_ITEM_API,
    SAVE_PAYMENT_APT
} from '../action/actionType'
import axios from 'axios'
import payment from '../../component/page/Cart/element/payment';

const initialState = {
    id: 0,
    ToYesNoCart: false,
    listCardUser: [],
    listCardDetail: [],
    listProducts: [],
    differentProduct: [],
    isFetching: false,
    listOder: []
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
        case FIND_CATEGORY:
            return findcategory(state, action)
        //xóa phần tử giỏ hàng trên API
        case DETELE_ITEM_API:
            return deleteItemApi(state, action)
        //lưu lại history mua hàng
        case SAVE_PAYMENT_APT:
            return saveHistoryPayment(state, action)
        //save list product by thunk
        case 'FETCHING_DATA_ODER_DETAIL':
            return {
                ...state,
                listCardDetail: action.data
            }
        case 'FETCHING_DATA_ODER':
            return {
                ...state,
                listOder: action.data
            }
        case 'FETCHING_DATA':
            return {
                ...state,
                listProducts: [],
                isFetching: true
            }
        case 'DATA_PRODUCT_THUNK':
            state = { ...state, listProducts: action.data, isFetching: false, }
            return state
        default:
            return state
    }
}
function findcategory(state, action) {
    var data = action.data
    var diff = []
    data.forEach(element => {
        if (element.catagory === action.cate) {
            diff.push(element)
        }
    });

    state = { ...state, differentProduct: diff }
    return state;
}
async function deleteItemApi(state, action) {
    var idcart
    state.listCardUser.forEach(element => {
        if (element.idUser === action.idUser) {
            console.log(element.idCart);
            idcart = element.idCart
        }
    });

    //sau khi luu lai can luu lai list cart Detai tren  store

    var ProData = await axios.get('http://5d08a7b5034e5000140106c4.mockapi.io/api/cartDetail')
        .then(function (response) {
            return response.data
        })

    ProData.forEach(element => {
        console.log(element);
        if (parseInt(element.idCard) === parseInt(idcart) && parseInt(element.idProduct) === parseInt(action.idPro)) {
            const id = element.id
            console.log(element);
            axios.delete(`http://5d08a7b5034e5000140106c4.mockapi.io/api/cartDetail/${id}`)
        }
    });
    state = await {
        ...state, listCardDetail: await axios.get('http://5d08a7b5034e5000140106c4.mockapi.io/api/cartDetail')
            .then(function (response) {
                return response.data
            })
    }
    console.log(state.listCardDetail);
    return state
}
async function saveHistoryPayment(state, action) {
    var idcart
    let listdata = await axios.get('http://5d08a7b5034e5000140106c4.mockapi.io/api/cart')
        .then(function (response) {
            return response.data
        })
    listdata.forEach(element => {
        console.log(element.idUser + "/" + action.idUser);

        if (parseInt(element.idUser) === parseInt(action.idUser)) {
            idcart = element.idCart
        }
    });
    console.log(idcart);

    var d = new Date();
    const bill = {
        idUser: action.idUser,
        idCart: idcart,
        Sum: action.sum,
        date: d.getDate() + "/" + d.getDay() + "/" + d.getFullYear()
    }
    axios.post('https://5c317daad18a50001463d41d.mockapi.io/api/oder', { ...bill })
    var a = []
    localStorage.setItem(`${action.idUser}`, JSON.stringify(a));
    return state
}