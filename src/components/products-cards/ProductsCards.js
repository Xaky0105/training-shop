import Cart from '../cart/Cart'
import { PRODUCTS } from '../../constants/constant'

export const Cards = ({ productType}) => {
    let targetProduct
    if(productType === "men") {
        targetProduct = PRODUCTS.men
    } else if (productType === "women") {
        targetProduct = PRODUCTS.women
    } else {
        targetProduct = PRODUCTS.men.concat(PRODUCTS.women)
    }
    console.log(targetProduct)
    return (
        <ul className="carts">
            {targetProduct.map((item) => (
                <Cart
                    card={item}
                    productType={item.category}
                    key={item.id}
                    sale={String(item.discount).slice(1,3)}
                />
            ))}
        </ul>
    )
    
}

export default Cards