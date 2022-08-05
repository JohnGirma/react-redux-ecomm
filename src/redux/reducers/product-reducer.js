import { ProductActionType } from "../constants/product-action-type"
const initialState={
    productLists:[]
}

export const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case ProductActionType.ALL_PRODUCT:
            return {...state, productLists:action.payload}
        default:
            return state
    }

}
export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type){
        case ProductActionType.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ProductActionType.REMOVE_PRODUCT:
            return {}
        default:
            return state
    }

}