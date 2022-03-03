import Truck from "./img/truck.svg"
import Refresh from "./img/refresh.svg"
import Support from "./img/support.svg"

function Advantage() {
    return (
        <div className="advantage_wrap">
            <div className="container">
                <div className="advantage">
                    <div className="advantage_item">
                        <img src={Truck} alt=''/>
                        <div className="advantage_item_content">
                            <h3 className="advantage_item_title">FREE SHIPPING</h3>
                            <p className="advantage_item_text">On all UA order or order above $100</p>
                        </div>
                    </div>
                    <div className="advantage_item">
                        <img src={Refresh} alt=''/>
                        <div className="advantage_item_content">
                            <h3 className="advantage_item_title">30 DAYS RETURN</h3>
                            <p className="advantage_item_text">Simply return it within 30 days for an exchange</p>
                        </div>
                    </div>
                    <div className="advantage_item">
                        <img src={Support} alt=''/>
                        <div className="advantage_item_content">
                            <h3 className="advantage_item_title">SUPPORT 24/7</h3>
                            <p className="advantage_item_text">Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantage