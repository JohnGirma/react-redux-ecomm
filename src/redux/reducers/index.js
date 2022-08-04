import {combineReducers} from '@reduxjs/toolkit'
import { productReducer } from './product-reducer'

const reducers=combineReducers({
    productReducer:productReducer
})