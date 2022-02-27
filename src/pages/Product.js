

import ProductHeader from "../components/product-header/ProductHeader"
import RelatedProducts from "../components/related-products/RelatedProducts"
import ProductCard from '../components/product-card/ProductCard'


import {useParams} from 'react-router-dom'
import { PRODUCTS } from "../constants/constant"

function Product() {
    const {id, productType} = useParams();
    console.log(productType)
    console.log(id)

    let targetProduct
    if(productType === "men") {

        targetProduct = PRODUCTS.men.find(obj => obj.id === id)
        

    } else if(productType === "women") {

        targetProduct = PRODUCTS.women.find(obj => obj.id === id)

    }
    console.log(targetProduct)
    return (
        <div className="page-product" data-test-id={`product-page-${productType}`}>  
            
            <ProductHeader 
                
                product = {targetProduct}
            />
            <ProductCard 
                product = {targetProduct}
                
            />
            <RelatedProducts 
                
            />
        </div>
    )
}

export default Product