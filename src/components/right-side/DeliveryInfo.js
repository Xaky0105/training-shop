import React from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import Select from "react-select"
import * as yup from 'yup'
import Btn from "../button/Btn"

export const DeliveryInfo = ({submitDelivery, setSelectCountry, getCountry, setStoreAddress, countries, step, totalPrice, address, changeOrderStepLeft, selectCountry, storeAddress}) => {
    console.log(storeAddress)
    console.log(countries)
    console.log(selectCountry)
    const getAddressOfStore = address[0] && address[0].map(item => item.city)
    console.log(getAddressOfStore && getAddressOfStore)
    
    function checkAddress() {
        if (getAddressOfStore && getAddressOfStore.includes(storeAddress)) {
            return true
        } else {
            return false
        }
    }
    const options = [];
    countries.forEach((item) => {
        options.push({
            value: item.name,
            label: item.name
        })
    })
    const onChange = (newValue) => {
        setSelectCountry(newValue.value)
    }  
    const getValue = () => {
        return selectCountry ? options.find(c => c.value === selectCountry) : ''
    }
    // validation phone
    const getInputNumbersValue = function(input) {
        return input.value.replace(/\D/g, '');
    }
    const onPhoneInput = function(event) {
        let input = event.target,
            inputNumbersValue = getInputNumbersValue(input),
            formattedPhoneValue = '+375 ',
            selectionStart = input.selectionStart;
        if (!inputNumbersValue) {
            return input.value = '';
        }
        if (input.value.length !== selectionStart) {
            console.log('редактирование в середине строки', event)
            if (event.nativeEvent.data && /\D/g.test(event.nativeEvent.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }
        if (inputNumbersValue.length === 1) {
            formattedPhoneValue += inputNumbersValue
        } 
        if (inputNumbersValue.length > 3) {
            formattedPhoneValue += '(' + inputNumbersValue.substring(3, 5)
        }
        if (inputNumbersValue.length >= 6) {
            formattedPhoneValue += ') ' + inputNumbersValue.substring(5, 8)
        }
        if (inputNumbersValue.length >= 9) {
            formattedPhoneValue += inputNumbersValue.substring(8, 12)
        }
        return input.value = formattedPhoneValue;
    }
    console.log(options)
    
    const validationsSchema = yup.object().shape({
        deliveryMethod: yup.string(),
        phone: yup.string()
        .required('Поле должно быть заполнено')
        .matches(/^(\+375)(\s\D)(29|25|44|33)(\D\s)(\d{7})$/,'Не верный формат'),
        email: yup.string()
        .email('Введите корректный Email')
        .matches(/[a-zA-Z0-9]+@([a-zA-Z0-9]{2})+\.[a-zA-Z0-9]+/, 'Не верный формат')
        .required('Поле должно быть заполнено'),
        country: yup.string().when('deliveryMethod', {
            is: (deliveryMethod) => deliveryMethod === 'pickup from post offices' || deliveryMethod === 'express delivery',
            then: yup.string().required('Поле должно быть заполнено'),
        }),
        // selectCountry: yup.string().when('deliveryMethod', {
        //     is: 'store pickup',
        //     then: yup.string().required('Поле должно быть заполнено')
        // }),
        city: yup.string().when('deliveryMethod', {
            is: (deliveryMethod) => deliveryMethod === 'pickup from post offices' || deliveryMethod === 'express delivery',
            then: yup.string().required('Поле должно быть заполнено'),
        }),
        street: yup.string().when('deliveryMethod', {
            is: (deliveryMethod) => deliveryMethod === 'pickup from post offices' || deliveryMethod === 'express delivery',
            then: yup.string().required('Поле должно быть заполнено'),
        }),
        house: yup.number().when('deliveryMethod', {
            is: (deliveryMethod) => deliveryMethod === 'pickup from post offices' || deliveryMethod === 'express delivery',
            then: yup.number().required('Поле должно быть заполнено'),
        }),
        postcode: yup.number().when('deliveryMethod', {
            is: 'pickup from post offices',
            then: yup.number().required('Поле должно быть заполнено')
        }),
        storeAddress: yup.string().when(['deliveryMethod', 'getAddress'], {
            is: (deliveryMethod, getAddress) => deliveryMethod === 'store pickup' && getAddress === false,
            then: yup.string().required('Выберите страну из списка')
        }),
        confirm: yup.boolean()
        .oneOf([true], 'Вы должны согласиться на обработку личной информации')
        .required('Вы должны согласиться на обработку личной информации')

    }) 
    
    return (
        <div className="delivery_info">
            <Formik
                initialValues={{
                    deliveryMethod: 'pickup from post offices',
                    phone: '',
                    email: '',
                    country: '',
                    selectCountry: '',
                    city: '',
                    street: '',
                    house: '',
                    apartment: '',
                    storeAddress: '',
                    postcode: '',
                    confirm: false,
                    getAddress: checkAddress()
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
                                    <label >
                                        <input
                                            type='tel'
                                            name='phone'
                                            maxLength='17'
                                            placeholder='+375 (__) _______'
                                            onChange={(event) => {
                                                handleChange(event)
                                                onPhoneInput(event)
                                            }}
                                            onBlur={handleBlur}
                                            // validate={validationsSchema}
                                        />
                                        {touched.phone && errors.phone && <span className="error_order">{errors.phone}</span>}
                                    </label>
                                    
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
                                        {touched.email && errors.email && <span className="error_order">{errors.email}</span>}
                                    </label>
                                    
                                </div>
                                {(values.deliveryMethod === 'pickup from post offices' || values.deliveryMethod === 'express delivery') && <div className="group group_adress">
                                    <span>Adress</span>
                                    <label >
                                        <Field type='text' name='country' placeholder='Country'/>
                                        {touched.country && errors.country && <span className="error_order">{errors.country}</span>}
                                    </label>
                                   
                                    <label>
                                        <Field type='text' name='city' placeholder='City'/>
                                        {touched.city && errors.city && <span className="error_order">{errors.city}</span>}
                                    </label>
                                   
                                    <label>
                                        <Field type='text' name='street' placeholder='Street'/>
                                        {touched.street && errors.street && <span className="error_order">{errors.street}</span>}
                                    </label>
                                   
                                    <div className="mini">
                                        <label>
                                            <Field type='text' name='house' placeholder='House'/>
                                            {touched.house && errors.house && <span className="error_order">{errors.house}</span>}
                                        </label>
                                        
                                        <label>
                                            <Field type='text' name='apartment' placeholder='Apartment'/>
                                        </label>
                                    </div>
                                </div>}
                                {values.deliveryMethod === 'store pickup' && <div className="group group_adress">
                                    <span>Adress of store</span>
                                    <label >
                                        <Select 
                                            name="selectCountry"
                                            options={options}
                                            onChange={(event) => {
                                                onChange(event)
                                            }}
                                            value={getValue()}
                                            onBlur={handleBlur}
                                            placeholder='Выберите страну'
                                            validate={validationsSchema}
                                        />
                                        {touched.country && errors.country &&  <span className="error_order">{errors.country}</span>}
                                    </label>
                                    <label>
                                        <Field
                                            type='text'
                                            name='storeAddress' 
                                            placeholder='Store address'
                                            onChange={(event) => {
                                                setStoreAddress(event.target.value)
                                                handleChange(event)
                                            }}
                                            onBlur={(event) => {
                                                handleBlur(event)
                                                checkAddress(event)
                                            }}
                                            list='123'
                                            disabled={!selectCountry}
                                            validate={validationsSchema}
                                        />
                                        {<datalist id="123">
                                            {address[0] && address[0].map((item) => (
                                                <option key={item._id} value={item.city}>{item.city}</option>
                                            ))}
                                        </datalist>}
                                        {touched.storeAddress && errors.storeAddress && checkAddress() === false && <span className="error_order">{errors.storeAddress}</span>}
                                    </label>
                                    
                                </div>}
                                {values.deliveryMethod === 'pickup from post offices' &&
                                <div className="group">
                                    <span>postcode</span>
                                    <label >
                                        <Field type='text' name='postcode' placeholder='BY ______'/>
                                        {touched.postcode && errors.postcode && <span className="error_order">{errors.postcode}</span>}
                                    </label>
                                    
                                </div>}
                                <label className="checkbox_item">
                                    <Field type='checkbox' name='confirm'/>
                                    I agree to the processing of my personal information
                                    <ErrorMessage name="confirm" component='label' className="error_order"></ErrorMessage>
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
                                    <Btn title = {'Further'} onClick={handleSubmit}/>
                                    <Btn title = {'View cart'} onClick={changeOrderStepLeft}/>
                                </div>
                            </div>
                        </Form>
                    </> 
                )}  
            </Formik>
            
        </div>
    )
}


