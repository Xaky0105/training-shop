import { Link } from "react-router-dom";

import Social from "../social/Social";
import Phone from "./img/phone.svg"
import Location from "./img/location.svg"
import Clock from "./img/clock.svg"
import Search from "./img/search.svg"
import Globe from "./img/globe.svg"
import User from "./img/user.svg"
import Shop from "./img/shop-bag.svg"


function Nav() {
    return (
        <header className='header' data-test-id='header'>
            <div className='top_bar'>
                <div className='container'>
                    <div className='inner_top_bar'>
                        <div className='contacts'>
                            <div className="contacts_item">
                                <img src={Phone} alt=''/>
                                <a href="tel:+375291002030">+375 29 100 20 30</a>
                            </div>
                            <div className="contacts_item">
                                <img src={Location} alt=''/>
                                <span>Belarus, Gomel, Lange 17</span>
                            </div>
                            <div className="contacts_item">
                                <img src={Clock} alt=''/>
                                <span>All week 24/7</span>
                            </div>
                        </div>
                        <Social />
                        
                    </div>
                </div>
            </div>
            <nav className='menu' data-test-id='menu'>
                <div className='container'>
                    <div className="nav_wrap">
                        <div className='nav_left'>
                            <Link to='/' className="header-nav-logo" data-test-id='header-logo-link'>
                                CleverShop
                            </Link>    
                        </div>
                        <div className='nav_center'>
                            <ul className="menu" data-test-id='menu'>
                                <a href="/#"><li>About Us</li></a>
                                <Link to='women'><li>Women</li></Link>
                                <Link to='men'><li>Men</li></Link>
                                <a href="/#"><li>Beauty</li></a>
                                <a href="/#"><li>Accessories</li></a>
                                <a href="/#"><li>Blog</li></a>
                                <a href="/#"><li>Contact</li></a>
                            </ul>
                        </div>
                        <div className='nav_right'>
                            <a className='nav_right_item' href='/#'>
                                <img src={Search} alt=''/>
                            </a>
                            <a className='nav_right_item' href='/#'>
                                <img src={Globe} alt=''/>
                            </a>
                            <a className='nav_right_item' href='/#'>
                                <img src={User} alt=''/>
                            </a>
                            <a className='nav_right_item' href='/#'>
                                <img src={Shop} alt=''/>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;

