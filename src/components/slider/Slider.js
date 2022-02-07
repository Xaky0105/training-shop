import Banner from "./img/banner.png"
import Women from "./img/women.png"
import Man from "./img/man.png"
import Accessories from "./img/Accessories.png"

function Slider() {
    return (
        <div className="container">
            <div className="slider_wrap">
                <div className="slider">
                    <img src={Banner}/>
                </div>
                <div className="intro_right">
                    <div className="intro_right_top">
                        <div className="intro_right_top-item">
                            <img src={Women}></img>
                        </div>
                        <div className="intro_right_top-item">
                            <img src={Man}></img>
                        </div>
                    </div>
                    <div className="intro_right_bottom">
                        <img src={Accessories}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider