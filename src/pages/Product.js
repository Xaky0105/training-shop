

import ProductHeader from "../components/product-header/ProductHeader"
import RelatedProducts from "../components/related-products/RelatedProducts"
import ProductCard from '../components/product-card/ProductCard'


import {useParams} from 'react-router-dom'
// import { PRODUCTS } from "../constants/constant"
import ScrollToTop from "../components/ScrollToTop"
import { useSelector } from "react-redux"



function Product() {
    const {id, productType} = useParams();
    const PRODUCTS = useSelector(state => state.products.products)
    const productsType = PRODUCTS && PRODUCTS[productType]
    let product = productsType ? productsType.find(obj => obj.id === id) : null
    return (
        <div className="page-product" data-test-id={`product-page-${productType}`}>  
            <ScrollToTop />
            {productsType && <ProductHeader 
                product = { product }
            />}
            {productsType && <ProductCard 
                product = { product }
            />}
            <RelatedProducts 
                id={id} 
            />
            
        </div>
    )
}

export default Product