import Cart from '../cart/Cart'


import { product } from '../../constants/constant'




function Cards(props) {
    let targetProduct
    
    if(props.productType === "men") {

        targetProduct = product.men

    } else if (props.productType === "women") {

        targetProduct = product.women

    } else if (props.productType === "related") {
        targetProduct = product.related
    } else {
        targetProduct = product.men.concat(product.women)
    }
    console.log(targetProduct)
    return (
        <>
        <div className="carts">
            {targetProduct.map((obj) => (
            
            <Cart
                key = {obj.id}
                id = {obj.id}
                productType = {obj.productType}
                title = {obj.title}
                price = {obj.price}
                imageUrl = {obj.imageUrl}
                rating = {obj.rating}
            />
        ))}
        </div>
        </>
    )
    
}

export default Cards