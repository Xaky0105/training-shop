import Btn from "../button/Btn"
import Daco from "./img/Daco.png"
import Man from "./img/man.png"

function Subscribe() {
    return (
        <div className="subscribe">
            <div className="subscribe_inner">
                <img className="daco" src={Daco} alt=''></img>
                <img className="man" src={Man} alt=''></img>
                <p>Special Offer</p>
                <h2 className="title">Subscribe</h2>
                <h2 className="subtitle">And <span>Get 10% Off</span></h2>
                <input className="mail" type='email' placeholder="Enter your email"></input>
                <Btn />

            </div>
        </div>
    )
}

export default Subscribe