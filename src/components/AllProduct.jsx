import { useSelector , useDispatch} from "react-redux"
import ProductComponent from "./ProductComponents"
import {allProduct} from "../redux/action/product-actions"
import axios from 'axios'
import { useEffect } from "react"

const AllProduct=()=>{
    const products=useSelector((state)=>state)
    const dispatch=useDispatch()

    const getAllProduct=async()=>{
        const result=await axios.get('https://fakestoreapi.com/products').catch((error=>{
            console.log(error)
        }))
        // console.log(result.data)
        dispatch(allProduct(result.data))
        }
    useEffect(()=>{
        getAllProduct()
    },[])
    console.log("from the store ",products)
    return(
        <div className="ui grid containner" style={{marginTop:"60px"}}>
            <ProductComponent/>
        </div>
    )
}
export default AllProduct