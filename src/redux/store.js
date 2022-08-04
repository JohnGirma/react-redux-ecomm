import {createStore} from "@reduxjs/toolkit"
import reducers from "./reducers/index"

const prodStore=createStore(
    reducers,{}
)
export default prodStore