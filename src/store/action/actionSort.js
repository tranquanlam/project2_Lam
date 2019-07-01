import {
    SORT_CATEGORY_1,
    SORT_CATEGORY_2,
    SORT_NAME_PRODUCT
} from './actionType'
export function sortByType1(listpro) {
    return { type: SORT_CATEGORY_1, listpro }
}
export function sortByType2(listpro) {
    return { type: SORT_CATEGORY_2, listpro }
}
export function sortName(listpro) {
    return { type: SORT_NAME_PRODUCT, listpro }
}
