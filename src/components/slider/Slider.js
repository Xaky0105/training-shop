import Banner from "./img/banner.png"
import Women from "./img/women.png"
import Man from "./img/man.png"
import Accessories from "./img/Accessories.png"
import arrow from "./img/arrow.svg"

import { Link } from "react-router-dom"

function Slider() {
    return (
        <div className="container">
            <div className="slider_wrap">
                <div className="slider">
                    <img src={Banner} alt=''/>
                    
                    <div class="title_slider">
                        <img className="arr_left" src={arrow} alt=''/>
                        <img className="arr_right" src={arrow} alt=''/>
                        <p>Banner</p>
                        <h1>your Title text </h1>
                    </div>
                    
                </div>
                <div className="intro_right">
                    <div className="intro_right_top">
                        <div className="intro_right_top-item">
                            <Link to='women'><img src={Women} alt=''></img></Link>
                            <Link to="women" className="intro_title">Women</Link>
                        </div>
                        <div className="intro_right_top-item">
                            <Link to='men'><img src={Man} alt=''></img></Link>
                            <Link to='men' className="intro_title">Men</Link>
                        </div>
                    </div>
                    <div className="intro_right_bottom">
                        <a href="/#"><img src={Accessories} alt=''></img></a>
                        <a href="/#" className="intro_title">Accessories</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider