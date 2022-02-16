
import mini1 from './img/mini1.jpg'
import mini2 from './img/mini2.jpg'
import mini3 from './img/mini3.jpg'
import mini4 from './img/mini4.jpg'
import arr from './img/Arr.svg'
import arrRight from './img/Arr_right.svg'
import thing1 from './img/Rectangle1.jpg'
import thing4 from '../clothes/img/thing4.jpg'
import thing6 from '../clothes/img/thing6.png'
import thing7 from '../clothes/img/thing7.jpg'
import sizeGuide from './img/size-guide.png'
import heart from './img/heart.svg'
import scale from './img/scale.svg'
import truck from './img/truck.svg'
import refresh from './img/refresh.svg'
import mail from './img/mail.svg'
import write from './img/annotation.svg'

import aes from './img/AES256.svg'
import americanExp from './img/american-express.svg'
import discover from './img/discover.svg'
import mastercard from './img/mastercard.svg'
import visa from './img/visa.svg'
import stripe from './img/Stripe.svg'
import paypal from './img/paypal.svg'

import BtnSmall from '../button-small/BtnSmall'

import { Link } from 'react-router-dom'
import Rating from '../rating/Rating'


const safeLinks = [
    {id: 1, path: '#', img: stripe},
    {id: 2, path: '#', img: aes},
    {id: 3, path: '#', img: paypal},
    {id: 4, path: '#', img: visa},
    {id: 5, path: '#', img: mastercard},
    {id: 6, path: '#', img: discover},
    {id: 7, path: '#', img: americanExp},
]

function ProductCard() {
    return (
        <>
            <div className="container">
                <div className="product_card">
                    <div className="slider_card">
                        <div className='slider_left'>
                            <div className='slider_left_arr'>
                                <img className='slider_left_arr_left' src={arr} alt=''/>
                                <img className='slider_left_arr_right' src={arr} alt=''/>
                            </div>
                            <img className='mini_img' src={mini1} alt=''/>
                            <img className='mini_img' src={mini2} alt=''/>
                            <img className='mini_img' src={mini3} alt=''/>
                            <img className='mini_img' src={mini4} alt=''/>
                        </div>
                        <div className="slider_right">
                            <img className='slider_right_arr_left' src={arr} alt=''/>
                            <img className='slider_right_arr_right' src={arrRight} alt=''/>
                            <img src={thing1} alt='' />
                        </div>
                    </div>
                    <div className="about_card">
                        <div className='change_color'>
                            <div className='color_title'>
                                <h4>Color:</h4>
                                <span>Blue</span>
                            </div>
                            <div className='color_img'>
                                <a href="/#"><img width={64} height={64} src={thing1} alt='' /></a>
                                <a href="/#"><img width={64} height={64} src={thing4} alt='' /></a>
                                <a href="/#"><img width={64} height={64} src={thing6} alt='' /></a>
                                <a href="/#"><img width={64} height={64} src={thing7} alt='' /></a>
                            </div>
                        </div>
                        <div className='size'>
                            <div className='size_title'>
                                <h4>Size:</h4>
                                <span>S</span>
                            </div>
                            <div className='size_link'>
                                <a href='/#'>XS</a>
                                <a href='/#'>S</a>
                                <a href='/#'>M</a>
                                <a href='/#'>L</a>
                            </div>
                            <a className='size_guide' href="/#"><img src={sizeGuide} alt=''></img></a>
                        </div>
                        <div className='buy'>
                            <span className='price'>$ 379,99</span>
                            <BtnSmall 
                                title = 'Add to card'
                            />
                            <a href="/#"><img src={heart} alt=''/></a>
                            <a href="/#"><img src={scale} alt=''/></a>
                        </div>
                        <div className="support_wrapper">
                            <div className='support'>
                                <a href='/#'>
                                    <img src={truck} alt=''/>
                                    <span>Shipping &amp; Delivery</span>
                                </a>
                                <a href='/#'>
                                    <img src={refresh} alt=''/>
                                    <span>Returns &amp; Exchanges</span>
                                </a>
                                <a href='/#'>
                                    <img src={mail} alt=''/>
                                    <span>Ask a question</span>
                                </a>
                            </div>
                        </div>
                        <div className='safe'>
                            <h4 className='safe_title'>guaranteed safe checkout</h4>
                            <div className="pay_link">
                                {safeLinks.map(({id, path, img}) => (
                                    <Link key={id} to={`/${path}`} className='pay_link_item'>
                                        <img src={img} alt=''></img>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <h3 className='description'>Description</h3>
                        <div className='info'>
                            <h3 className='info_title'>ADDITIONAL INFORMATION</h3>
                            <div className="additional_info_item">
                                <h4 className='info_subtitle'>Color:</h4>
                                <span>Blue, White, Black, Grey</span>
                            </div>
                            <div className="additional_info_item">
                                <h4 className='info_subtitle'>Size:</h4>
                                <span>XS, S, M, L</span>
                            </div>
                            <div className="additional_info_item">
                                <h4 className='info_subtitle'>Material:</h4>
                                <span>100% Polyester</span>
                            </div>
                        </div>
                        <div className='comments'>
                            <h3 className='comments_title'>Reviews</h3>
                            <div className="comments_top">
                                <div className='comments_top_left'>
                                    <Rating />
                                    <span>2 Rewiews</span>
                                </div>
                                <a href='/#' className="comments_top_right">
                                    <img src={write} alt='' />
                                    <span>Write a review</span>
                                </a>
                            </div>
                            <div className="comment">
                                <div className="comment_header">
                                    <div className='comment_name'>Oleh Chabanov</div>
                                    <div className="wrap_pub_date">
                                        
                                        <time className='pub_date'>3 months ago</time>
                                        <Rating />
                                    </div>
                                </div>
                                <div className='comment_text'>On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment</div>
                                <div className="comment_header">
                                    <div className='comment_name'>ShAmAn design</div>
                                    <div className="wrap_pub_date">
                                        <time className='pub_date'>3 months ago</time>
                                        <Rating />
                                    </div>
                                </div>
                                <div className='comment_text'>On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProductCard