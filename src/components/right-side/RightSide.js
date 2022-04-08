import React, { useState } from "react"
import vector from '../assets/img/Vector.svg'
import { useSelector, useDispatch } from "react-redux"
import classNames from "classnames"
import {deleteItemFromCart, plusQuantity, minusQuantity} from '../../redux/cart/cart.reducer'
import { setProductsOrder, clearProductsOrder, orderStepPlus, orderStepMinus, setDeliveryInfo, setPaymentInfo } from "../../redux/order/order.reducer"
import { fetchCountries } from "../../redux/countries/countries.thunk"
import { fetchAddress } from "../../redux/address/address.thunk"
import { DeliveryInfo } from "./DeliveryInfo"
import { Payment } from "./Payment"
import { ItemsInCart } from "./ItemsInCart"

export const RightSide = ({onClick, classNameRS, isRightSideOpen}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    let step = useSelector(state => state.order.step)
    const {countries, address} = useSelector(state => state.countries)
    const totalPrice = items.reduce((acc, item) => acc += item.quantity * Math.round(item.price) , 0)
    const onClearBasket = (url, isActiveSize) => {
        dispatch(deleteItemFromCart({url, isActiveSize}))
    }
    
    const changeOrderStepRight = () => {
        if (step === 0) {
            dispatch(clearProductsOrder())
            dispatch(setProductsOrder(items))
            dispatch(orderStepPlus())
        }
    }
    const submitDelivery = (values, {setSubmitting}) => {
        dispatch(setDeliveryInfo(values))
        dispatch(orderStepPlus())
        setSubmitting(false);
    }
    const getCountry = () => {
        dispatch(fetchCountries())
    }
    const [storyAddress, setStoryAddress] = useState('')
    const [selectCountry, setSelectCountry] = useState('')
    React.useEffect(() => {
        if (storyAddress.length === 3) {
            dispatch(fetchAddress({storyAddress, selectCountry}))
        }
        // eslint-disable-next-line
    }, [storyAddress])
    
    const submitPayment = (values, {setSubmitting}) => {
        dispatch(setPaymentInfo(values))
        dispatch(orderStepPlus())
        setSubmitting(false);
    }
    
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
                {items.length > 0 && 
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
                        changeOrderStepRight={changeOrderStepRight}
                        onClick={onClick}
                    />
                }
                { step === 1 &&
                    <DeliveryInfo
                        submitDelivery={submitDelivery}
                        setSelectCountry={ setSelectCountry}
                        getCountry={getCountry}
                        setStoryAddress={setStoryAddress}
                        countries={countries}
                        step={step}
                        totalPrice={totalPrice}
                        address={address}
                        changeOrderStepLeft={changeOrderStepLeft}
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
            </div>
            <div onClick={onClick} className={classNames("overlay", {visible: isRightSideOpen})}></div>
            
        </>
    )
}