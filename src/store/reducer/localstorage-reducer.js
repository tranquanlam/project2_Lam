import { SAVE_ADD_CART_LOCALSTORAGE, DETELE_ITEM_LOCALSTORAGE } from '../action/actionType'

const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ADD_CART_LOCALSTORAGE:
            return addLocalStorage(state, action)
        case DETELE_ITEM_LOCALSTORAGE:
            return deteleItemLocalStorage(state, action)
        default:
            return state
    }
}
//   XÓA LOCAL
function deteleItemLocalStorage(state, action) {
    //lấy dữ liệu để xử lý khi add localstorage
    var a = JSON.parse(localStorage.getItem(`${action.idUser}`));
    a.forEach(element => {
        if (parseInt(action.idPro) === parseInt(element.idPro)) {
            a.splice((a.indexOf(element.amount)));
        }
    });
    //truyền mảng vào localstorage
    localStorage.setItem(`${action.idUser}`, JSON.stringify(a));
    return state
}

//   THÊM LOCAL
function addLocalStorage(state, action) {
    //lấy dữ liệu để xử lý khi add localstorage
    var a = JSON.parse(localStorage.getItem(`${action.idUser}`));

    var itemCart = {
        idPro: action.item.id,
        imgItem: action.item.imageproduct,
        nameItem: action.item.productName,
        price: action.item.price,
        amount: action.amount,
        idUser: action.idUser
    }
    //kiểm tra trong mảng a có sản phẩm này chưa
    var isHas = false
    a.forEach(element => {
        if (parseInt(action.item.id) === parseInt(element.idPro)) {
            isHas = true;
        }
    });

    //thêm hoặc update lại cart
    if (isHas === true) {
        a.forEach(element => {
            if (parseInt(action.item.id) === parseInt(element.idPro)) {
                element.amount = action.amount
            }
            //nếu số lượng bằng 0 thì xóa phần tử đó
            if (element.amount === 0) {
                a.splice((a.indexOf(element.amount)));
            }
        });
    }
    else { a.push(itemCart) }
    //truyền mảng vào localstorage
    localStorage.setItem(`${action.idUser}`, JSON.stringify(a));
    return state
}