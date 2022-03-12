import Btn from "../button/Btn"
import cross from '../assets/img/cross.svg'
import rectangle from '../assets/img/Rectangle.png'
import trash from '../assets/img/trash.svg'

export const RightSide = ({onClick}) => {

    return (
        <>
            
                <div className="basket">
                    <div className="basket_header">
                        <h3 className="basket_title">Shopping Card</h3>
                        <img onClick={onClick} className="close" src={cross} alt=""></img>
                    </div>
                    <div className="basket_center">
                        <div className="basket_nav">
                            <span>Item in cart</span>
                            <span>Delivery Info</span>
                            <span>Payment</span>
                        </div>
                        <div className="items">
                            <div className="item">
                                <img src={rectangle} alt=''></img>
                                <div className="about_cart">
                                    <div className="about_cart_top">
                                        <h4 className="title">Women's tracksuit Q109</h4>
                                        <span className="color">Blue</span>,
                                        <span className="size">S</span>
                                    </div>
                                    <div className="about_cart_bot">
                                        <div className="counter">
                                            <input type='button' value='-'/>
                                            <span>1</span>
                                            <input type='button' value='+'/>
                                        </div>
                                        <span className="price">200BYN</span>
                                    </div>
                                </div>
                                <div className="trash">
                                    <img src={trash} alt=""/>
                                </div>
                            </div>
                            <div className="item">
                                <img src={rectangle} alt=''></img>
                                <div className="about_cart">
                                    <div className="about_cart_top">
                                        <h4 className="title">Women's tracksuit Q109</h4>
                                        <span className="color">Blue</span>,
                                        <span className="size">S</span>
                                    </div>
                                    <div className="about_cart_bot">
                                        <div className="counter">
                                            <input type='button' value='-'/>
                                            <span>1</span>
                                            <input type='button' value='+'/>
                                        </div>
                                        <span className="price">200BYN</span>
                                    </div>
                                </div>
                                <div className="trash">
                                    <img src={trash} alt=""/>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="basket_footer">
                        <div className="total_price">
                            <p>Total</p>
                            <span>500</span>
                        </div>
                        <Btn
                            title = {'Further'}
                        />
                        <Btn
                            title = {'View cart'}
                        />
                    </div>
                </div>
                <div onClick={onClick} className="overlay"></div>
            
        </>
    )
}