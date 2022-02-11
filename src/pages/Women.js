import Cards from "../components/cards/Cards"
import ProductsHeader from "../components/products-header/ProductsHeader"

import loading from '../components/products-header/img/Square-Loading.svg'


function Women() {
    return (
        <>
        <ProductsHeader 
            title = "Women"
        />
        <div className="container">
            <Cards />
        </div>
        <img className="loading" src={loading} alt=''></img>

        
           
               
            
        </>
    )
}

export default Women