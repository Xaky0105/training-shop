import Cart from '../cart/Cart'
import { useSelector} from "react-redux"

// import { PRODUCTS } from '../../constants/constant'




export const HomeCards = ({filtered: {particularName}, productType}) => {
    const PRODUCTS = useSelector(state => state.products.products)
    let targetProduct
    if(productType === "men" && PRODUCTS !== undefined) {
        targetProduct = PRODUCTS.men
    } else if (productType === "women" && PRODUCTS !== undefined) {
        targetProduct = PRODUCTS.women
    }
    return (
        <ul className="carts">
            {targetProduct !== undefined && targetProduct.filter((obj) => obj.particulars[particularName]).map((item) => (
                <Cart
                    card={item}
                    productType={item.category}
                    key={item.id}
                    sale={String(item.discount).replace(/\D/g, '')}
                />
            ))}
        </ul>
    )
    
}

export default HomeCards