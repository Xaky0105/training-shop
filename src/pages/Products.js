import ProductsCards from '../components/products-cards/ProductsCards'
import ProductsHeader from "../components/products-header/ProductsHeader"

import loading from '../components/products-header/img/Square-Loading.svg'
import { PRODUCTS } from '../constants/constant'


import {useParams} from 'react-router-dom'

function Products() {
    const {productType} = useParams();
    console.log(productType)
    const onChange = (item) => (
        console.log(item)
    )
    console.log(onChange)
    const productsType = PRODUCTS[productType]
    const sizesArr = productsType.map(item => item.sizes)
    const imagesArr = productsType.map(item => item.images).flat(Infinity)
    console.log(imagesArr)
    //size
    function getSize(arr) {
        let size = []
        for (let i = 0; i < arr.length; i++) {
            size += `,${arr[i].concat(arr[i + 1])}`
        }
        return size.split(',')
    }
    console.log(getSize(sizesArr))
    const uniqSize = [...new Set(getSize(sizesArr))]

    //colors
    const colors = imagesArr.map((obj) => {
        return obj.color
    })
    const uniqueColor = [...new Set(colors)]

    //brand
    function getUniqueBrand(arr) {
        let uniq = {}
        return arr.filter(obj => !uniq[obj.brand] && (uniq[obj.brand] = true))  
    }
    return (
        <div className="products-page" data-test-id={`products-page-${productType}`}>
            <ProductsHeader 
                productType = {productType}
                productsType = {productsType}
                onChange = {onChange}
                uniqueColor = {uniqueColor}
                uniqSize = {uniqSize}
                getUniqueBrand = {getUniqueBrand}
            />
            <div className="container">
                <ProductsCards
                    productType = {productType}
                    productsType = {productsType}
                    onChange = {onChange}
                    uniqueColor = {uniqueColor}
                    uniqSize = {uniqSize}
                    getUniqueBrand = {getUniqueBrand}
                    
                />
            </div>
            <img className="loading" src={loading} alt=''></img>  
                
        </div>
    )
}

export default Products