import { Link } from "react-router-dom";
import { useState } from "react"
import classNames from "classnames";



import { menu } from "../../constants/constant";

import Social from "../social/Social";

import Phone from "../assets/img/phone-header.svg"
import Location from "../assets/img/location-header.svg"
import Clock from "../assets/img/clock-header.svg"
import Search from "../assets/img/search.svg"
import Globe from "../assets/img/globe.svg"
import User from "../assets/img/user.svg"
import Shop from "../assets/img/shop-bag.svg"
import CLShop from "../assets/img/CleverShop.png"
import { RightSide } from "../right-side/RightSide";



function Header() {
    const [isMobileMenuOpen, setMobileMenu] = useState(false)
    const [isMenuOpen, toggleMenu] = useState(false);
    const [isRightSideOpen, setIsRightSideOpen] = useState(false)

   function onClickBasket() {
       setIsRightSideOpen(!isRightSideOpen)
   }
    
    function onClickCross() {
        toggleMenu(!isMenuOpen)
        setMobileMenu(!isMenuOpen) 
    }
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
            <nav className="nav">
                <div className='container'>
                    <div className="nav_wrap">
                        <div className='nav_left'>
                            <Link to='/' className="header-nav-logo" data-test-id='header-logo-link'>
                                <img src={CLShop} alt='logo'></img>
                            </Link>    
                        </div>
                        <ul className={classNames('menu', {visible: isMobileMenuOpen})} data-test-id='burger-menu'>
                            {menu.map(({id, path, name}) => (
                                <li key={id}>
                                    <Link
                                        to={`/${path}`}
                                        className='menu-item'
                                        data-test-id={`menu-link-${path}`}
                                        onClick={onClickCross}
                                    >
                                        <span>{name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div 
                            aria-hidden='true' 
                            className={classNames("mask", {visible: isMobileMenuOpen})}
                            onClick={onClickCross}
                        >

                        </div>
                        <div className='nav_right'>
                            <Link to='/#' className='nav_right_item'>
                                <img src={Search} alt=''/>
                            </Link>
                            <Link to='/#' className='nav_right_item'>
                                <img src={Globe} alt=''/>
                            </Link>
                            <Link to='/#' className='nav_right_item'>
                                <img src={User} alt=''/>
                            </Link>
                            <span onClick={onClickBasket} className='nav_right_item'>
                                <img src={Shop} alt=''/>
                                <span className="number_goods">0</span>
                            </span>
                            <div className="nav_right_item">
                                <button 
                                    className={classNames('burger', {visible: isMenuOpen})}
                                    type="button"
                                    onClick={onClickCross}
                                    data-test-id='burger-menu-btn'
                                >
                                    <span className="burger_item"></span>
                                </button> 
                            </div> 
                        </div>
                    </div>
                </div>
            </nav>
            {isRightSideOpen ? <RightSide onClick = {onClickBasket}/> : null}
        </header>
    )
}

export default Header;

