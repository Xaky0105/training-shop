import Cart from '../cart/Cart'


import { PRODUCTS } from '../../constants/constant'




export const HomeCards = ({filtered: {particularName}, productType}) => {
    let targetProduct
    if(productType === "men") {
        targetProduct = PRODUCTS.men
    } else if (productType === "women") {
        targetProduct = PRODUCTS.women
    } else {
        targetProduct = PRODUCTS.men.concat(PRODUCTS.women)
    }
    console.log(targetProduct)
    console.log(particularName)
    return (
        <ul className="carts">
            {targetProduct.filter((obj) => obj.particulars[particularName]).map((item) => (
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