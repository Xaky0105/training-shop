

import ProductHeader from "../components/product-header/ProductHeader"
import RelatedProducts from "../components/related-products/RelatedProducts"
import ProductCard from '../components/product-card/ProductCard'

import { product } from "../constants/constant"

import {useParams} from 'react-router-dom'


function Product() {
    const {productType} = useParams();
    console.log(productType)
    return (
        <div className="page-product" data-test-id={`product-page-${productType}`}>  
            
            <ProductHeader 
                title = {product.title}
            />
            <ProductCard />
            <RelatedProducts />
        </div>
    )
}

export default Product