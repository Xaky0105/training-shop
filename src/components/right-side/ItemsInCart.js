import { useDispatch } from 'react-redux'
import trash from '../assets/img/trash.svg'
import Btn from '../button/Btn';

export const ItemsInCart = ({items, minusQuantity, plusQuantity, onClearBasket, totalPrice, changeOrderStepRight, onClick}) => {
    const dispatch = useDispatch();
    return (
        <div className="items_in_cart">
            <ul className="items"> 
                {(items.length > 0) ? 
                    items.map((item, id) => (
                        <li key={id} className="item" data-test-id='cart-card'> 
                        <img width={85} src={`https://training.cleverland.by/shop${item?.url}`} alt=''></img>
                            <div className="about_cart">    
                                <div className="about_cart_top">
                                    <h4 className="title">{item.name}</h4>
                                    <span className="color">{item.activeColor},</span>
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
                        </li>
                )) : <span className="empty_cart">Sorry, your cart is empty</span>}
            </ul> 
            <div className="basket_footer_wrap">
                <div className="basket_footer">
                {items.length > 0 ?
                    <div className="total_price">
                        <p>Total</p>
                        <span>{totalPrice} BYN</span>
                    </div> :
                    null
                }
                </div>
                {items.length > 0 ?
                <div className="btn_group">
                    <Btn title = {'Further'} onClick={changeOrderStepRight}/>
                </div> :
                <div className="btn_group">
                    <Btn onClick={onClick} title={'Back to shopping'}/>
                </div> }
            </div>
        </div>
    )
}

