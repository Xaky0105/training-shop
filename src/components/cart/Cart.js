import { Link} from "react-router-dom";
// import { useEffect, useState } from "react";


import Rating from "../rating/Rating";


export const Cart = ({card: {name, price, images, rating, id, discount}, productType, sale}) => {
    const calculatedPrice = price + ((sale/ 100) * price);
    
    console.log(sale)
    
    return (
        
        <li className="cards-item" data-test-id={`clothes-card-${productType}`}>
            <Link key={id} to={`/${productType}/${id}`} >
                <div className="discount">{discount}</div>
                <div className="img_wrap"><img src={`https://training.cleverland.by/shop${images[0]?.url}`} alt=''/></div>
                <h3 className='cart_title'>{name}</h3>
                <div className="cart_bottom">
                    <div className='cart_price'>
                        <span className="price" >{Math.round(price)} BYN </span>
                        {discount && <span className="price_before"> {Math.round(calculatedPrice)} BYN </span>}
                    </div>
                    <Rating
                        rating = {rating}
                    />
                </div>
            </Link>
        </li>
    )
    
}


export default Cart