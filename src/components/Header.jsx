import { Link  } from "react-router-dom"

const Header=()=>{
    return(
        <div className="ui fixed menu">
            <div className="ui container center">
            <h1><Link to={'/'}>E-commerce</Link></h1>
            
            </div>
        </div>
    )
}
export default Header