import { Field, Form, Formik } from "formik"
import * as yup from 'yup'
import Btn from "../button/Btn"

export const DeliveryInfo = ({submitDelivery, setSelectCountry, getCountry, setStoryAddress, countries, step, totalPrice, address, changeOrderStepLeft}) => {
    const validationsSchema = yup.object().shape({
        phone: yup.string()
        .typeError('Введите телефон в соответсвтующем формате')
        .required('Поле должно быть заполненно')
        .matches(/^(\+375)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/, 
        'Не верный формат' 
        ),
        email: yup.string()
        .email('Введите корректный Email')
        .matches(/[a-zA-Z0-9]+@([a-zA-Z0-9]{2})+\.[a-zA-Z0-9]+/, 'Не верный формат')
        .required('Поле должно быть заполненно')
    }) 
    return (
        <div className="delivery_info">
            <Formik
                initialValues={{
                    deliveryMethod: 'pickup from post offices',
                    phone: '',
                    email: '',
                    country: '',
                    city: '',
                    street: '',
                    house: '',
                    apartment: '',
                    storeAddress: '',
                    postcode: '',

                }}
                validateOnBlur
                onSubmit={submitDelivery}
                validationSchema={validationsSchema}
    
            >
                {({values, handleChange, handleBlur, touched, errors, handleSubmit}) => (
                    <>
                        <Form>
                            <div className="delivery">
                                <h4>Choose the method of delivery of the items</h4>
                                <div className="radio_delivery_group">
                                    <label className="radio_delivery_item">
                                        <Field
                                            type='radio'
                                            name='deliveryMethod'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value='pickup from post offices'
                                        />
                                        Pickup from post offices
                                    </label>
                                    <label className="radio_delivery_item">
                                        <Field
                                            type='radio'
                                            name='deliveryMethod'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value='express delivery'
                                        />
                                        Express delivery
                                    </label>
                                    <label className="radio_delivery_item">
                                        <Field
                                            type='radio'
                                            name='deliveryMethod'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value='store pickup'
                                            onClick={getCountry}
                                        />
                                        Store pickup
                                    </label>
                                </div>
                                <div className="group">
                                    <span>Phone</span>
                                    <label className="error_order" >
                                        <Field
                                            type='tel'
                                            name='phone'
                                            placeholder='+375 (__) _______'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            validate={validationsSchema}
                                        />
                                    </label>
                                    {touched.phone && errors.phone && <span className="error_order">{errors.phone}</span>}
                                </div>
                                <div className="group">
                                    <span>E-mail</span>
                                    <label >
                                        <Field
                                            type='email'
                                            name='email'
                                            placeholder='e-mail'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            validate={validationsSchema}
                                        />
                                    </label>
                                    {touched.email && errors.email && <span className="error_order">{errors.email}</span>}
                                </div>
                                {(values.deliveryMethod === 'pickup from post offices' || values.deliveryMethod === 'express delivery') && <div className="group group_adress">
                                    <span>Adress</span>
                                    <label >
                                        <Field type='text' name='country' placeholder='Country'/>
                                    </label>
                                    <label>
                                        <Field type='text' name='city' placeholder='City'/>
                                    </label>
                                    <label>
                                        <Field type='text' name='street' placeholder='Street'/>
                                    </label>
                                    <div className="mini">
                                        <label>
                                            <Field type='text' name='house' placeholder='House'/>
                                        </label>
                                        <label>
                                            <Field type='text' name='apartment' placeholder='Apartment'/>
                                        </label>
                                    </div>
                                </div>}
                                {values.deliveryMethod === 'store pickup' && <div className="group group_adress">
                                    <span>Adress of store</span>
                                    <label >
                                        <select onChange={(event) => setSelectCountry(event.target.value)}>
                                            {countries.map((country) => (
                                                <option key={country._id}>
                                                    {country.name}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                    <label>
                                        <input
                                            type='text' 
                                            name='storeAddress' 
                                            placeholder='Store address'
                                            onChange={(event) => setStoryAddress(event.target.value)}
                                            list='123'
                                        />
                                        {<datalist id="123">
                                            {address[0] && address[0].map((item) => (
                                                <option key={item._id} value={item.city}>{item.city}</option>
                                            ))}
                                        </datalist>}
                                    </label>
                                </div>}
                                {values.deliveryMethod === 'pickup from post offices' &&
                                <div className="group">
                                    <span>postcode</span>
                                    <label >
                                        <Field type='text' name='postcode' placeholder='BY ______'/>
                                    </label>
                                </div>}
                                <label className="checkbox_item">
                                    <Field type='checkbox' name='checked' value={'checked'}/>
                                    I agree to the processing of my personal information
                                </label>
                            </div>
                            <div className="basket_footer_wrap">
                                <div className="basket_footer">
                                <div className="total_price">
                                    <p>Total</p>
                                    <span>{totalPrice} BYN</span>
                                </div>
                                </div>
                                <div className="btn_group">
                                    {step === 1 &&
                                        <>
                                            <Btn title = {'Further'} onClick={handleSubmit}/>
                                            <Btn title = {'View cart'} onClick={changeOrderStepLeft}/>
                                        </>
                                    }
                                </div>
                            </div>
                        </Form>
                    </>
                    
                )}  
            </Formik>
            
        </div>
    )
}


