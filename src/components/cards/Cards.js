import Cart from '../cart/Cart'


import { PRODUCTS } from '../../constants/constant'




export const Cards = ({filtered: particularName, productType}) => {
    let targetProduct
    if(productType === "men") {
        targetProduct = PRODUCTS.men
    } else if (productType === "women") {
        targetProduct = PRODUCTS.women
    } else {
        targetProduct = PRODUCTS.men.concat(PRODUCTS.women)
    }
    console.log(targetProduct)

    // let parcticularsItems = targetProduct[0]
    

    console.log(particularName)
    return (
        <>
        <div className="carts">
            {targetProduct.map((item) => (
                <Cart
                    card={item}
                    productType={item.category}
                    key={item.id}
                    sale={String(item.discount).slice(1,3)}
                />
            ))}
        </div>
        </>
    )
    
}

export default Cards