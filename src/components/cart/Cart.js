import { Link } from "react-router-dom";

import { product } from "../../constants/constant";
import Rating from "../rating/Rating";


function Cart(props) {
   
    
    
    
    return (
        <Link to={`/${product[0].productType}/${product[0].id}`} className="cards-item" data-test-id={`clothes-card-${product.productType}`}>
            <a href='/#' className="img_wrap"><img  src={props.imageUrl} alt=''/></a>
            <h3 className='cart_title'>{props.title}</h3>
            <div className="cart_bottom">
                <p className='cart_price'>$ {props.price}</p>
                <Rating 
                    rating = {props.rating}
                />
            </div>
        </Link>
    )
}

export default Cart