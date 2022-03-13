import { useDispatch, useSelector } from "react-redux";
import {setItemInCart, deleteItemFromCart} from '../../redux/basket/reducer'


function BtnSmall({product: {activeColor, url, id, price, name, isActiveSize}}) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemsInCart = items.some(item => item.id === id && item.isActiveSize === isActiveSize && item.activeColor === activeColor)

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemsInCart) {
            dispatch(deleteItemFromCart({activeColor, url, id, price, name, isActiveSize}))
        } else {
            dispatch(setItemInCart({activeColor, url, id, price, name, isActiveSize}))
        }
        
    }
    return (
        <button 
        className="btn-sm"
        onClick={handleClick}
        >
         { isItemsInCart ? 'Remove to card' : 'Add to card'}
        </button>
    )
}

export default BtnSmall