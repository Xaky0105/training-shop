import Btn from "../button/Btn"
import { clearResponseOrder } from "../../redux/order/response.reducer"
import { useDispatch } from "react-redux"
import { stepOnItemsInCart } from "../../redux/order/order.reducer"

export const ApplicationError = ({changeOrderStepLeft}) => {
    const dispatch = useDispatch();
    function backToPayment() {
        dispatch(clearResponseOrder())
        changeOrderStepLeft()
    }
    function backToItemsInCart() {
        dispatch(stepOnItemsInCart())
        dispatch(clearResponseOrder())
    }
    return (
        <div className="application">
            <div className="application_text">
                <h4 className="application_header">
                    Sorry, your payment has not been processed.
                </h4>
                <p>Failed to pay for the order, the problem is on the side of the bank</p>
            </div>
            <div className="btn_group">
                <Btn onClick={backToPayment} title={'Back to payment'}/>
                <Btn onClick={backToItemsInCart} title={'View cart'}/>
            </div>
        </div>
    )
}