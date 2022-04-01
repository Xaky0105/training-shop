

import ProductHeader from "../components/product-header/ProductHeader"
import RelatedProducts from "../components/related-products/RelatedProducts"
import ProductCard from '../components/product-card/ProductCard'


import {useParams} from 'react-router-dom'
// import { PRODUCTS } from "../constants/constant"
import ScrollToTop from "../components/ScrollToTop"
import { useSelector, useDispatch } from "react-redux"
import { fetchProduct } from "../redux/product/product.thunk";
import { useEffect } from "react"



function Product() {
    const {id, productType} = useParams();
    const dispatch = useDispatch();
    const PRODUCTS = useSelector(state => state.products.products)
    const {isLoading, isError, num} = useSelector(state => state.reviews)
    const productsType = PRODUCTS && PRODUCTS[productType]
    let product = productsType ? productsType.find(obj => obj.id === id) : null

    const updateProduct = useSelector(state => state.product.product)
    const reviewsUpdate = updateProduct.reviews
    
    useEffect(() => {
        if (isLoading === false && isError === false && num === true) {
            dispatch(fetchProduct(id))
        }
        // eslint-disable-next-line
    }, [num])
    return (
        <div className="page-product" data-test-id={`product-page-${productType}`}>  
            <ScrollToTop />
            {productsType && <ProductHeader 
                product = { product }
                reviewsUpdate={reviewsUpdate}
                updateProduct={updateProduct}

            />}
            {productsType && <ProductCard 
                product = { product }
                reviewsUpdate={reviewsUpdate}
                updateProduct={updateProduct}
            />}
            <RelatedProducts 
                id={id} 
            />
            
        </div>
    )
}

export default Product