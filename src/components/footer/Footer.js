import { Link } from "react-router-dom";

import Social from '../social/Social'
import Stripe from './img/Stripe.svg'
import Aes from './img/AES.svg'
import Paypal from './img/paypal.svg'
import Visa from './img/visa.svg'
import Mastercard from './img/mastercard.svg'
import Discover from './img/discover.svg'
import Aexpress from './img/american-express.svg'
import Location from './img/location-marker.svg'
import Phone from './img/phone.svg'
import Clock from './img/clock.svg'
import Mail from './img/mail.svg'

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
    {id: 2, path: 'tel:+375291002030', name: '+375 29 100 20 30', img: Phone},
    {id: 3, path: '#', name: 'All week 24/7', img: Clock},
    {id: 4, path: 'mailto:info@clevertec.ru', name: 'info@clevertec.ru', img: Mail},
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
    return (
        <footer className="footer" data-test-id='footer'>
            <div className="footer_top">
                <div className="container">
                    <div className="footer_top_wrap">
                        <h3 className="footer_title">
                            BE IN TOUCH WITH US:
                        </h3>
                        <div className="join_us">
                            <form action="/" method="post">
                                <label>
                                    <input className="footer_mail" type={'email'} name="user_mail" placeholder="Enter your email"/>
                                </label>
                                <input className="footer_btn" type={'submit'} value='JOIN US'/>
                            </form>
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
                            <a href="https://clevertec.ru/study/frontend.html" target='blank'>Clevertec.ru/training</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;