import Cards from "../components/cards/Cards"
import ProductsHeader from "../components/products-header/ProductsHeader"

import loading from '../components/products-header/img/Square-Loading.svg'


import {useParams} from 'react-router-dom'




function Products() {
    const {productType} = useParams();
    console.log(productType)
    
    return (
        <div className="products-page" data-test-id={`products-page-${productType}`}>
            <ProductsHeader 
                productType = {productType}
            />
            <div className="container">
                <Cards 
                    productType = {productType}
                />
            </div>
            <img className="loading" src={loading} alt=''></img>  
                
        </div>
    )
}

export default Products