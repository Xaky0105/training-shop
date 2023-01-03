import React, { useState } from "react"
import vector from '../assets/img/Vector.svg'
import { useSelector, useDispatch } from "react-redux"
import classNames from "classnames"
import {deleteItemFromCart, plusQuantity, minusQuantity} from '../../redux/cart/cart.reducer'
import { setProductsOrder, clearProductsOrder, orderStepPlus, orderStepMinus, setDeliveryInfo, setTotalPrice } from "../../redux/order/order.reducer"
import { fetchCountries } from "../../redux/countries/countries.thunk"
import { fetchAddress } from "../../redux/address/address.thunk"
import { DeliveryInfo } from "./DeliveryInfo"
import { Payment } from "./Payment"
import { ItemsInCart } from "./ItemsInCart"
import { ApplicationAccepted } from "./ApplicationAccepted"
import { fetchOrder } from "../../redux/order/order.thunk"
import { ApplicationError } from "./ApplicationError"

export const RightSide = ({onClick, classNameRS, isRightSideOpen}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    let step = useSelector(state => state.order.step)
    const order = useSelector(state => state.order)
    const responseOrder = useSelector(state => state.response.message)
    const {countries, address} = useSelector(state => state.countries)
    const totalPrice = items.reduce((acc, item) => acc += item.quantity * Math.round(item.price) , 0)
    const onClearBasket = (url, isActiveSize) => {
        dispatch(deleteItemFromCart({url, isActiveSize}))
    }
    const submitItemsInCart = () => {
        dispatch(clearProductsOrder())
        dispatch(setProductsOrder(items))
        dispatch(setTotalPrice(totalPrice))
        dispatch(orderStepPlus()) 
    }
    const submitDelivery = (values, {setSubmitting}) => {
        dispatch(setDeliveryInfo({selectCountry, storeAddress, values}))
        dispatch(orderStepPlus())
        setSubmitting(false);
        console.log(values)
    }
    const submitPayment = (values, {setSubmitting}) => {
        dispatch(orderStepPlus())
        if (values.paymentMethod === 'visa' || values.paymentMethod === 'mastercard') {
            values.paymentMethod = 'card'
        }
        dispatch(fetchOrder({order, values}))
        setSubmitting(false);
    }
    const getCountry = () => {
        dispatch(fetchCountries())
    }
    const [storeAddress, setStoreAddress] = useState('')
    const [selectCountry, setSelectCountry] = useState('')
    console.log(storeAddress)
    React.useEffect(() => {
        if (storeAddress.length === 3) {
            dispatch(fetchAddress({storeAddress, selectCountry}))
        }
        // eslint-disable-next-line
    }, [storeAddress])

    function changeOrderStepLeft() {
        dispatch(orderStepMinus())
    }
    return (
        <>
            <div className={classNameRS} data-test-id='cart'>
                <div className="basket_header">
                    <h3 className="basket_title">Shopping Card</h3>
                    <img onClick={onClick} className="close"  src={vector} alt=""></img>
                </div>
                {items.length > 0 && step !== 3 &&
                    <div className="basket_nav">
                        <span className={classNames('basket_nav_item', {active: step === 0})}>Item in cart</span>
                        <span className={classNames('basket_nav_item', {active: step === 1})}>Delivery Info</span>
                        <span className={classNames('basket_nav_item', {active: step === 2})}>Payment</span>
                    </div>
                }
                { step === 0 &&
                    <ItemsInCart 
                        items={items}
                        minusQuantity={minusQuantity}
                        plusQuantity={plusQuantity}
                        onClearBasket={onClearBasket}
                        totalPrice={totalPrice}
                        submitItemsInCart={submitItemsInCart}
                        onClick={onClick}
                        step={step}
                    />
                }
                { step === 1 &&
                    <DeliveryInfo
                        submitDelivery={submitDelivery}
                        setSelectCountry={ setSelectCountry}
                        getCountry={getCountry}
                        setStoreAddress={setStoreAddress}
                        countries={countries}
                        step={step}
                        totalPrice={totalPrice}
                        address={address}
                        changeOrderStepLeft={changeOrderStepLeft}
                        selectCountry={selectCountry}
                        storeAddress={storeAddress}
                    />
                }
                { step === 2 &&
                    <Payment 
                        submitPayment={submitPayment}
                        totalPrice={totalPrice}
                        step={step}
                        changeOrderStepLeft={changeOrderStepLeft}
                    />
                }
                { responseOrder === 'success' &&
                    <ApplicationAccepted 
                        onClick={onClick}
                    /> }
                {(responseOrder !== 'success' && responseOrder !== '') && <ApplicationError 
                    changeOrderStepLeft={changeOrderStepLeft}
                />
                }
            </div>
            <div onClick={onClick} className={classNames("overlay", {visible: isRightSideOpen})}></div>
            
        </>
    )
}