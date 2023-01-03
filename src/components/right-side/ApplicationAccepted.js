import Btn from "../button/Btn"
import { useDispatch } from "react-redux"
import { stepOnItemsInCart } from "../../redux/order/order.reducer"
import { clearResponseOrder } from "../../redux/order/response.reducer"
import { deleteAllItemsInCart } from "../../redux/cart/cart.reducer"

export const ApplicationAccepted = ({onClick}) => {
    const dispatch = useDispatch()
    function backToShoping() {
        onClick()
        dispatch(stepOnItemsInCart())
        dispatch(clearResponseOrder())
        dispatch(deleteAllItemsInCart())
    }
    return (
        <div className="application">
            <div className="application_text">
                <h4 className="application_header">
                    Thank you for your order
                </h4>
                <p>Information about your order will appear in your e-mail</p>
                <p>Our manager will call you back</p>
            </div>
            <div className="btn_group">
                <Btn onClick={backToShoping} title={'Back to shopping'}/>
            </div>
        </div>
    )
}