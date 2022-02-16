import Cart from '../cart/Cart'


import { product } from '../../constants/constant'




function Cards(props) {
    
    return (
        <>
        <div className="carts">
            {product.filter(
                (obj) => {
                    if (props.productType) {
                       return props.productType === obj.productType
                    } else {
                        return true
                    }
                }
            ).map((obj) => (
                
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