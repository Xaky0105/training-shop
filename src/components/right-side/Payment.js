import { Field, Form, Formik } from "formik"
import paypal from '../assets/img/paypal-color.svg'
import visa from '../assets/img/visa-color.svg'
import mastercard from '../assets/img/mastercard-color.svg'
import Btn from "../button/Btn"

export const Payment = ({submitPayment, step, totalPrice, changeOrderStepLeft}) => {

    return (
        <div className="payment">
            <Formik
                initialValues={{
                    paymentMethod: 'card',
                    card: '',
                    cardCVV: '',
                    cardDate: '',
                    cashEmail: '',

                }}
                validateOnBlur
                onSubmit={submitPayment}
                // validationSchema={validationsSchema}

            >
                {({values, handleChange, handleBlur, touched, errors, handleSubmit}) => (
                    <Form>
                        <div className="payment_inner">
                            <h4 className="">Method of payments</h4>
                            <div className="radio_payment_group">
                                <label className="radio_payment_item">
                                    <Field
                                        type='radio'
                                        name='paymentMethod'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value='paypal'
                                    />
                                    <img src={paypal} alt="" />
                                </label>
                                <label className="radio_payment_item">
                                    <Field
                                        type='radio'
                                        name='paymentMethod'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={'card'}
                                    />
                                    <img src={visa} alt="" />
                                </label>
                                <label className="radio_payment_item">
                                    <Field
                                        type='radio'
                                        name='paymentMethod'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={'card'}
                                    />
                                    <img src={mastercard} alt="" />
                                </label>
                                <label className="radio_payment_item">
                                    <Field
                                        type='radio'
                                        name='paymentMethod'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value='cash'
                                    />
                                    Cash
                                </label>
                            </div>
                            {values.paymentMethod === 'card' && <>
                                <div className="group">
                                <span>Card</span>
                                <label className="error_order" >
                                    <Field
                                        type='text'
                                        name='card'
                                        placeholder='____ ____ ____ ____'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // validate={validationsSchema}
                                    />
                                </label>
                                {touched.tel && errors.tel && <span className="error_order">{errors.tel}</span>}
                                </div>
                                <div className="group">
                                    <div className="mini">
                                        <label>
                                            <Field type='text' name='cardDate' placeholder='MM/YY'/>
                                        </label>
                                        <label>
                                            <Field type='text' name='cardCVV' placeholder='CVV'/>
                                        </label>
                                    </div>
                                </div>
                            </> }
                            {values.paymentMethod === 'paypal' && <div className="group">
                                <span>E-mail</span>
                                <label >
                                    <Field
                                        type='email'
                                        name='cashEmail'
                                        placeholder='e-mail'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        // validate={validationsSchema}
                                    />
                                </label>
                            </div>}
                        </div>
                        <div className="basket_footer_wrap">
                            <div className="basket_footer">
                            <div className="total_price">
                                <p>Total</p>
                                <span>{totalPrice} BYN</span>
                            </div>
                            </div>
                            <div className="btn_group">
                                {
                                    step === 2 &&
                                    <>
                                        {values.paymentMethod !== 'cash' ?
                                            <Btn title = {'Check out'} onClick={handleSubmit}/> :
                                            <Btn title = {'Ready'} onClick={handleSubmit}/>
                                        }
                            
                                        <Btn title = {'View cart'} onClick={changeOrderStepLeft}/>
                                    </>
                                }
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}