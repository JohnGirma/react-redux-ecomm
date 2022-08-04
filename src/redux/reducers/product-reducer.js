import { ProductActionType } from "../constants/product-action-types"
const initialState={
    productLists:[{
        id:11,
        title:"laptop",
        price:1499,
        description:"Great product at best price",
        catagory:"Electronics" 
    }]
}

export const productReducer=(state,action)=>{
    switch(type){
        case ProductActionType.ALL_PRODUCT:
            return state
        default:
            return state
    }

}