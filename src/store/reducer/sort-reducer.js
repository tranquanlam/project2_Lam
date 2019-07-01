import {
    SORT_CATEGORY_1,
    SORT_CATEGORY_2,
    SORT_NAME_PRODUCT
} from '../action/actionType'
const initialState = {
    sortPro: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SORT_CATEGORY_1:
            return sortPro1(state, action)
        case SORT_CATEGORY_2:
            return sortPro2(state, action)
        case SORT_NAME_PRODUCT:
            return sortnamePro(state, action)
        default:
            return state
    }
}
function sortPro1(state, action) {
    let sort1 = []
    action.listpro.forEach(element => {
        if (parseInt(element.catagory) === 1) {
            sort1.push(element)
        }
    });
    state = { ...state, sortPro: sort1 };
    return state;
}
function sortPro2(state, action) {
    let sort2 = []
    action.listpro.forEach(element => {
        if (parseInt(element.catagory) === 2) {
            sort2.push(element)
        }
    });
    state = { ...state, sortPro: sort2 };
    return state;
}
function sortnamePro(state, action) {
    var list = action.listpro
    var listName = []
    let sort = []

    list.forEach(element => {
        listName.push(element.productName)
    });

    //hàm sắp xếp lại list tên 
    listName.sort();
  
    //hàm tìm kiếm theo tên 
    listName.forEach(elementName => {
        list.forEach(element => {
            if (findProByName(element, elementName)) {

                sort.push(element)
            }
        });
    });
  
    
    state = { ...state, sortPro: sort };
    return state;
}
function findProByName(element, name) {
    if (element.productName === name) {
        return true
    } else {
        return false
    }
}
function sortPrice(state, action) {
    var list = action.listpro
    for (let i = 0; i < list.length; i++) {
        for (let j = i; j < list.length; j++) {
            if (list[i].amountbuy <= list[j].amountbuy) {
                let tam = list[i]
                list[i] = list[j]
                list[j] = tam
            }
        }
    }

    state = { ...state, sortPro: list };
    return state;
}