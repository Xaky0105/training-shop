import { Link } from "react-router-dom";

import Social from '../social/Social'

import Stripe from "../assets/img/Stripe.svg"
import Aes from "../assets/img/AES.svg"
import Paypal from "../assets/img/paypal.svg"
import Visa from "../assets/img/visa.svg"
import Mastercard from "../assets/img/mastercard.svg"
import Discover from "../assets/img/discover.svg"
import Aexpress from "../assets/img/american-express.svg"
import Location from "../assets/img/location-marker.svg"
import Phone from "../assets/img/phone.svg"
import Clock from "../assets/img/clock.svg"
import Mail from "../assets/img/mail.svg"
import { Formik } from "formik";
import * as yup from 'yup'
import { useDispatch } from "react-redux"
import { fetchEmail } from "../../redux/store/email";
import { useSelector } from "react-redux";

const categories = [
    {id: 1, path: 'men', name: 'Men'},
    {id: 2, path: 'women', name: 'Women'},
    {id: 3, path: '#', name: 'Accessories'},
    {id: 4, path: '#', name: 'Beauty'},
]
const information = [
    {id: 1, path: '#', name: 'About Us'},
    {id: 2, path: '#', name: 'Contact Us'},
    {id: 3, path: '#', name: 'Blog'},
    {id: 4, path: '#', name: 'FAQs'},
]
const usefulLinks = [
    {id: 1, path: '#', name: 'Terms & Conditions'},
    {id: 2, path: '#', name: 'Returns & Exchanges'},
    {id: 3, path: '#', name: 'Shipping & Delivery'},
    {id: 4, path: '#', name: 'Privacy Policy'},
]
const contacts = [
    {id: 1, path: '#', name: 'Belarus, Gomel, Lange 17', img: Location},
    {id: 2, path: '#', name: '+375 29 100 20 30', img: Phone},
    {id: 3, path: '#', name: 'All week 24/7', img: Clock},
    {id: 4, path: '#', name: 'info@clevertec.ru', img: Mail},
]

const payLinks = [
    {id: 1, path: '#', urlImg: Stripe},
    {id: 2, path: '#', urlImg: Aes},
    {id: 3, path: '#', urlImg: Paypal},
    {id: 4, path: '#', urlImg: Visa},
    {id: 5, path: '#', urlImg: Mastercard},
    {id: 6, path: '#', urlImg: Discover},
    {id: 7, path: '#', urlImg: Aexpress},

]

function Footer() {
    const dispatch = useDispatch();
    const {isLoading} = useSelector(state => state.email)
    const validationsSchema = yup.object().shape({
        email: yup.string().email('Введите верный email')
    })
    const submit = (values, { setSubmitting }) => {
        dispatch(fetchEmail(values))
        setSubmitting(false);
        
        console.log(values) 
    }
    return (
        <footer className="footer" data-test-id='footer'>
            <div className="footer_top">
                <div className="container">
                    <div className="footer_top_wrap">
                        <h3 className="footer_title">
                            BE IN TOUCH WITH US:
                        </h3>
                        <div className="join_us">
                            <Formik 
                                initialValues={{
                                    email: '',
                                }}
                                validateOnMount
                                onSubmit={submit}
                                validationSchema={validationsSchema}
                            >
                            {({ values, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                                <form>
                                    <label>
                                        <input 
                                            className="footer_mail" 
                                            type={'email'} 
                                            name="email" 
                                            placeholder="Enter your email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </label>
                                    <button 
                                        className="footer_btn" 
                                        type={'submit'} 
                                        value='JOIN US'
                                        disabled={!isValid || !dirty || isLoading}
                                        onClick={handleSubmit}
                                    >
                                        Join us
                                    </button>
                                </form>    
                            )}  
                            </Formik>
                            
                        </div>
                        <Social></Social>
                    </div>
                </div>
            </div>
            <div className="footer_middle">
                <div className="container">
                    <div className="footer_middle_wrap">
                        <div className="footer_middle_item">
                            <h2>Categories</h2>
                            {categories.map(({id, path, name}) => (
                                <Link key={id} to={`/${path}`} data-test-id={`footer-nav-link-${path}`}>
                                    <span>{name}</span>
                                </Link>
                            ))}
                        </div>
                        <div className="footer_middle_item">
                            <h2>Infomation</h2>
                            {information.map(({id, path, name}) => (
                                <Link key={id} to={`/${path}`} data-test-id={`footer-nav-link-${path}`}>
                                    <span>{name}</span>
                                </Link>
                            ))}
                        </div>
                        <div className="footer_middle_item">
                            <h2>Useful links</h2>
                            {usefulLinks.map(({id, path, name}) => (
                                <Link key={id} to={`/${path}`} data-test-id={`footer-nav-link-${path}`}>
                                    <span>{name}</span>
                                </Link>
                            ))}
                        </div>
                        <div className="footer_middle_item">
                            <h2>CONTACT US</h2>
                            {contacts.map(({id, path, img, name}) => (
                                <Link key={id} to={`/${path}`} className="footer_middle_item-item">
                                    <img src={img} alt=''/>
                                    <span>{name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="footer_bottom_wrap">
                        <div className="footer_bottom_left">
                            <span>Copyright © 2032 all rights reserved</span>
                        </div>
                        <div className="footer_bottom_center">
                            {payLinks.map(({id, path, urlImg}) => (
                                <Link key={id} to={`/${path}`} className='foot__bot_center_item'>
                                    <img src={urlImg} alt=''></img>
                                </Link>
                            ))}
                        </div>
                        <div className="footer_bottom_right">
                            <a href="https://drive.google.com/file/d/1dYY-yFzTIE05fHs33KABG9FNi9J3CYuU/view?usp=sharing" target='blank'>Ссылка на макет</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;