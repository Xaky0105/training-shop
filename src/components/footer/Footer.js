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



function Footer() {
    return (
        <footer className="footer">
            <div className="footer_top">
                <div className="container">
                    <div className="footer_top_wrap">
                        <h3 className="footer_title">
                            BE IN TOUCH WITH US:
                        </h3>
                        <div className="join_us">
                            <form action="" method="post">
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
                            <a href="">Men</a>
                            <a href="">Women</a>
                            <a href="">Accessories</a>
                            <a href="">Beauty</a>
                        </div>
                        <div className="footer_middle_item">
                            <h2>Infomation</h2>
                            <a href="">About Us</a>
                            <a href="">Contact Us</a>
                            <a href="">Blog</a>
                            <a href="">FAQs</a>
                        </div>
                        <div className="footer_middle_item">
                            <h2>Useful links</h2>
                            <a href="">Terms &amp; Conditions</a>
                            <a href="">Returns &amp; Exchanges</a>
                            <a href="">Shipping &amp; Delivery</a>
                            <a href="">Privacy Policy</a>
                        </div>
                        <div className="footer_middle_item">
                            <h2>CONTACT US</h2>
                            <div class="footer_middle_item-item">
                                <img src={Location} />
                                <a href="">Belarus, Gomel, Lange 17</a>
                            </div>
                            <div class="footer_middle_item-item">
                                <img src={Phone} />
                                <a href="tel:+375291002030">+375 29 100 20 30</a>
                            </div>
                            <div class="footer_middle_item-item">
                                <img src={Clock} />
                                <a href="">All week 24/7</a>
                            </div>
                            <div class="footer_middle_item-item">
                                <img src={Mail} />
                                <a href="mailto:info@clevertec.ru">info@clevertec.ru</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div class="container">
                    <div class="footer_bottom_wrap">
                        <div className="footer_bottom_left">
                            <span>Copyright © 2032 all rights reserved</span>
                        </div>
                        <div className="footer_bottom_center">
                            <a className="foot__bot_center_item" href="#">
                                <img src={Stripe}></img>
                            </a>
                            <a className="foot__bot_center_item" href="#">
                                <img src={Aes}></img>
                            </a>
                            <a className="foot__bot_center_item" href="#">
                                <img src={Paypal}></img>
                            </a>
                            <a className="foot__bot_center_item" href="#">
                                <img src={Visa}></img>
                            </a>
                            <a className="foot__bot_center_item" href="#">
                                <img src={Mastercard}></img>
                            </a>
                            <a className="foot__bot_center_item" href="#">
                                <img src={Discover}></img>
                            </a>
                            <a className="foot__bot_center_item" href="#">
                                <img src={Aexpress}></img>
                            </a>
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