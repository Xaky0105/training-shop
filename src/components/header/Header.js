import { Link } from "react-router-dom";

import Social from "../social/Social";
import Phone from "./img/phone.svg"
import Location from "./img/location.svg"
import Clock from "./img/clock.svg"
import Search from "./img/search.svg"
import Globe from "./img/globe.svg"
import User from "./img/user.svg"
import Shop from "./img/shop-bag.svg"


export const menu = [
    {id: 1, path: '/#', name: 'About Us'},
    {id: 2, path: 'women', name: 'Women'},
    {id: 3, path: 'men', name: 'Men'},
    {id: 4, path: '/#', name: 'Beauty'},
    {id: 5, path: '/#', name: 'Accessories'},
    {id: 6, path: '/#', name: 'Blog'},
    {id: 7, path: '/#', name: 'Contact'},

]
export const Menu = () => (
    <ul className='menu' data-test-id='menu'>
    {menu.map(({id, path, name}) => (
        <Link key={id} to={`/${path}`} className='menu-item' data-test-id={`menu-link-${path}`}>
            <span>{name}</span>
        </Link>
    ))}
</ul>
)


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
            <nav className="nav">
                <div className='container'>
                    <div className="nav_wrap">
                        <div className='nav_left'>
                            <Link to='/' className="header-nav-logo" data-test-id='header-logo-link'>
                                CleverShop
                            </Link>    
                        </div>
                        <div className='nav_center'>
                            {Menu()}
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

