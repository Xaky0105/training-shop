import Cards from "../components/cards/Cards"
import ProductsHeader from "../components/products-header/ProductsHeader"

import loading from '../components/products-header/img/Square-Loading.svg'

import { filter } from "../constants/constant"
import {useParams} from 'react-router-dom'



function Women() {
    const {productType} = useParams();
    return (
        <div className="products-page" data-test-id={`products-page-${productType}`}>
            <ProductsHeader 
                productType = {filter.women}
            />
            <div className="container">
                <Cards 
                    productType = {filter.women}
                />
            </div>
            <img className="loading" src={loading} alt=''></img>  
            
        </div>
    )
}

export default Women