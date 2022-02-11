import { Link } from "react-router-dom";

function Cart(props) {
    
    return (
        <Link to='product' className="cart">
            <a href='/#' className="img_wrap"><img width={255} height={318} src={props.imageUrl} alt=''/></a>
            <h3 className='cart_title'>{props.title}</h3>
            <p className='cart_price'>$ {props.price}</p>
        </Link>
    )
}

export default Cart