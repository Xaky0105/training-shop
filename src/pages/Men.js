import Cards from "../components/cards/Cards"
import ProductsHeader from "../components/products-header/ProductsHeader"

import loading from '../components/products-header/img/Square-Loading.svg'
import { filter } from "../constants/constant"




function Men() {
    
    return (
        <div className="products-page" data-test-id={`products-page-${filter.men}`}>
            <ProductsHeader 
                productType = {filter.men}
            />
            <div className="container">
                <Cards 
                    productType = {filter.men}
                />
            </div>
            <img className="loading" src={loading} alt=''></img>  
                
        </div>
    )
}

export default Men