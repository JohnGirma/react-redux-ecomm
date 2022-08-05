import { useSelector } from "react-redux"
import { Link  } from "react-router-dom"

const ProductComponent=()=>{
    const products=useSelector((state)=>state.productReducer.productLists)
    // console.log(products)
    // const product=products[0]
    const allMarkup=products.map((prod)=>{
        return(
        <div className="four wide  coiumn " key={prod.id}>
            <Link to={`/products/${prod.id}`}>
           <div className="ui centered  cards ">
                <div className="card">
                    <div className="image">
                        <img src={prod.image} alt={prod.title}  />
                    </div>
                    <div className="content">
                        <div className="header">{prod.title}</div>
                        <div className="meta price">{prod.price}$</div>
                        <div className="meta">{prod.category}</div>
                    </div>
                </div>
           </div>
           </Link>
        </div>
        )
    })
    return(
        <>
        {allMarkup}
        </>
        
    )
}
export default ProductComponent