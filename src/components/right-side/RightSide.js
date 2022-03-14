import Btn from "../button/Btn"
import cross from '../assets/img/cross.svg'
import trash from '../assets/img/trash.svg'
import { useSelector, useDispatch } from "react-redux"

import classNames from "classnames"
import {deleteItemFromCart, plusQuantity, minusQuantity} from '../../redux/basket/reducer'

export const RightSide = ({onClick, classNameRS, isRightSideOpen}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    
    
    console.log(items.map(item => item.quantity))
    const totalPrice = items.reduce((acc, price) => acc += Math.round(price.price) , 0)
    // const totalPrice = items.reduce( => item * price)

    const onClearBasket = (url, isActiveSize) => {
        dispatch(deleteItemFromCart({url, isActiveSize}))
    }
   
    return (
        <>

                <div className={classNameRS} data-test-id='cart'>
                    <div className="basket_header">
                        <h3 className="basket_title">Shopping Card</h3>
                        <img onClick={onClick} className="close" src={cross} alt=""></img>
                    </div>
                    <div className="basket_center">
                        <div className="basket_nav">
                            <span>Item in cart</span>
                            <span>Delivery Info</span>
                            <span>Payment</span>
                        </div>
                        <div className="items">
                            
                            {(items.length > 0) ? 
                                items.map((item, id) => (
                                    <div key={id} className="item" data-test-id='cart-card'> 
                                    <img width={85} src={`https://training.cleverland.by/shop${item?.url}`} alt=''></img>
                                        <div className="about_cart">
                                            
                                            <div className="about_cart_top">
                                                <h4 className="title">{item.name}</h4>
                                                <span className="color">{item.activeColor}</span>,
                                                <span className="size">{item.isActiveSize}</span>
                                            </div>
                                            <div className="about_cart_bot">
                                                <div className="counter">
                                                    {item.quantity > 1 ? 
                                                         <input onClick={() => dispatch(minusQuantity(item))} type='button' value='-' data-test-id='minus-product'/> :
                                                         <input type='button' value='-' data-test-id='minus-product'/>
                                                    }
                                                    <span>{item.quantity}</span>
                                                    <input onClick={() => dispatch(plusQuantity(item))} type='button' value='+' data-test-id='plus-product'/>
                                                </div>
                                                <span className="price">{item.quantity * Math.round(item.price)} BYN</span>
                                            </div>
                                        </div>
                                        <div className="trash">
                                            <img onClick={() => onClearBasket(item.url, item.isActiveSize)} src={trash} alt="" data-test-id='remove-product'/>
                                        </div>
                                    </div>
                            )) : <span className="empty_cart">Sorry, your cart is empty</span>}
                        </div>    
                    </div>
                    <div className="basket_footer">
                        <div className="total_price">
                            <p>Total</p>
                            <span>{totalPrice} BYN</span>
                        </div>
                        {items.length > 0 ? 
                        <div><Btn title = {'Further'}/><Btn onClick={onClick} title = {'View cart'}/> </div> : 
                        <Btn onClick={onClick} title={'Back to shopping'}/>}
                        
                        
                    </div>
                </div>
                <div onClick={onClick} className={classNames("overlay", {visible: isRightSideOpen})}></div>
            
        </>
    )
}