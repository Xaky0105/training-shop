import ProductHeader from "../components/product-header/ProductHeader"
import RelatedProducts from "../components/related-products/RelatedProducts"
import ProductCard from '../components/product-card/ProductCard'

import { product } from "../constants/constant"


function Product() {
    return (
        <>
            <ProductHeader 
                title = {product.title}
            />
            <ProductCard />
            <RelatedProducts />
        </>
    )
}

export default Product