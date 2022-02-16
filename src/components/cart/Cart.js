import { Link} from "react-router-dom";


import Rating from "../rating/Rating";


function Cart(props) {
    
    return (
        <Link to={`/${props.productType}/${props.id}`} className="cards-item" data-test-id={`clothes-card-${props.productType}`}>
            <div className="img_wrap"><img  src={props.imageUrl} alt=''/></div>
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