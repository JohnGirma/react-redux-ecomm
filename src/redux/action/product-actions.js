import { ProductActionType } from "../constants/product-action-type";
export const allProduct=(products)=>{
    return{
        type:ProductActionType.ALL_PRODUCT,
        payload:products
    }
}
export const selectedProduct=(product)=>{
    return{
        type:ProductActionType.SELECTED_PRODUCT,
        payload:product
    }
}
export const removeProduct=()=>{
    return{
        type:ProductActionType.REMOVE_PRODUCT,
        
    }
}