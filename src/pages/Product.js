

import ProductHeader from "../components/product-header/ProductHeader"
import RelatedProducts from "../components/related-products/RelatedProducts"
import ProductCard from '../components/product-card/ProductCard'


import {useParams} from 'react-router-dom'


function Product() {
    const {id, productType} = useParams();
    console.log(productType)
    console.log(id)
    return (
        <div className="page-product" data-test-id={`product-page-${productType}`}>  
            
            <ProductHeader 
                id = {id}
                productType = {productType}
            />
            <ProductCard />
            <RelatedProducts 
                
            />
        </div>
    )
}

export default Product