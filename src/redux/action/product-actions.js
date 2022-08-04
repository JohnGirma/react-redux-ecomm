import { ProductActionType } from "../constants/product-action-types";
export const allProductS=(products)=>{
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
        type:ProductActionType.SELECTED_PRODUCT,
        
    }
}