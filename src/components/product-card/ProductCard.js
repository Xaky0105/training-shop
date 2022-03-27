import React, {useState, useEffect} from 'react'
import { Navigation} from "swiper"
import { Thumbs } from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react"
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import 'swiper/css'
import 'swiper/css/navigation'

import arr from "../assets/img/Arr.svg"
import arrRight from "../assets/img/Arr_right.svg"
import sizeGuide from '../assets/img/size-guide.png'
import heart from '../assets/img/heart.svg'
import scale from '../assets/img/scale.svg'
import truck from '../assets/img/truck.svg'
import refresh from '../assets/img/refresh.svg'
import mail from '../assets/img/mail.svg'
import write from '../assets/img/annotation.svg'

import aes from '../assets/img/AES-color.svg'
import americanExp from '../assets/img/american-express-color.svg'
import discover from '../assets/img/discover-color.svg'
import mastercard from '../assets/img/mastercard-color.svg'
import visa from '../assets/img/visa-color.svg'
import stripe from '../assets/img/Stripe-color.svg'
import paypal from '../assets/img/paypal-color.svg'

import BtnSmall from '../button-small/BtnSmall'
import Rating from '../rating/Rating'
import ReviewForm from '../review-form-modal/ReviewForm'




const safeLinks = [
    {id: 100, path: '#', img: stripe},
    {id: 101, path: '#', img: aes},
    {id: 102, path: '#', img: paypal},
    {id: 103, path: '#', img: visa},
    {id: 104, path: '#', img: mastercard},
    {id: 105, path: '#', img: discover},
    {id: 106, path: '#', img: americanExp},
]

export const ProductCard = ({product: {category, id, images, material, price, name, rating, sizes, reviews}}) => {
    
    const colors = images.map((obj) => {
        return obj.color
    })
    // Сортирую цвета по уникальности
    const uniqueColor = [...new Set(colors)]
    console.log(images)
    // Сортирую изображения по цветовой уникальности
    function getUniqueImg(arr) {
        let uniq = {}
        return arr.filter(obj => !uniq[obj.color] && (uniq[obj.color] = true))
        
    }
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const gallerySwiperParams = {
      spaceBetween: 10,
      navigation: {
        nextEl: '.slider_right_arr_right',
        prevEl: '.slider_right_arr_left',
      }
    };
    const thumbnailSwiperParams = {
      slidesPerView: 4,
      spaceBetween: 0,
      direction: 'vertical',
      navigation: {
        nextEl: '.slider_left_arr_right',
        prevEl: '.slider_left_arr_left'
      }
    };

    const [showReviewForm, setShowReviewForm] = useState(false)
    function handleReviewForm() {
        setShowReviewForm(!showReviewForm)
    }
    showReviewForm ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

    const [isActiveColor, setIsActiveColor] = useState(images[0]);
    function addActiveColor(color) {
        let newColor = [...images].filter( item => item.color === color) 
        setIsActiveColor(newColor[0])  
    }
    const activeColor = isActiveColor.color
    const url = isActiveColor.url

    const [isActiveSize, setIsActiveSize] = useState(sizes[0]);
    function addActiveSize(size) {
        let newSize = [...sizes].filter( item => item === size)
        setIsActiveSize(newSize[0])  
    }
    console.log(isActiveSize)
    useEffect(() => {
        console.log('render')
        setIsActiveColor(images[0])
        setIsActiveSize(sizes[0])
        
        // eslint-disable-next-line
    }, [id])
    
    return (
        <>
           
            <div className="container">
                <ReviewForm 
                    showReviewForm={showReviewForm}
                    handleReviewForm={handleReviewForm}
                    id={id}
                />
                <div className="product_card">
                    <div className="slider_card" data-test-id='product-slider'>
                        <div className='slider_left'>
                            <div className='slider_left_arr'>
                                <img className='slider_left_arr_left' src={arr} alt=''/>
                                <img className='slider_left_arr_right' src={arr} alt=''/>
                            </div>
                            <Swiper
                                navigation={true} 
                                modules={[Thumbs, Navigation]}
                                onSwiper={setThumbsSwiper}
                                {...thumbnailSwiperParams}
                            >
                                {images.map((obj, index) => (
                                    
                                    <SwiperSlide>
                                        <img 
                                            key={obj[index]}
                                            className='mini_img' 
                                            src={`https://training.cleverland.by/shop${obj?.url}`} 
                                            
                                            alt=''/>
                                    </SwiperSlide>
                                ))}
                            </Swiper> 
                        </div>
                            <div className="slider_right">
                                <Swiper
                                    navigation={true} 
                                    modules={[Thumbs, Navigation]}
                                    thumbs={{swiper: thumbsSwiper}}
                                    {...gallerySwiperParams}
                                >
                                    <img className='slider_right_arr_left' src={arr} alt=''/>
                                    <img className='slider_right_arr_right' src={arrRight} alt=''/>
                                    {images.map((obj) => (
                                        <SwiperSlide>
                                            <img key={obj.id} className='main_slider' src={`https://training.cleverland.by/shop${obj?.url}`} alt='' />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                    </div>
                    <div className="about_card">
                        <div className='change_color'>
                            <div className='color_title'>
                                <h4>Color:</h4>
                                <span>{isActiveColor.color}</span>
                            </div>
                            <div className='color_img'>
                                {getUniqueImg(images).map((item) => (
                                    <span 
                                        key={item.color} 
                                        onClick={() => addActiveColor(item.color)} 
                                        className={classNames('color_img_wrap', {active: item.color === isActiveColor.color})}
                                    >
                                        <img  src={`https://training.cleverland.by/shop${item?.url}`} alt='' />
                                    </span>
                                ))}
                                
                            </div>
                        </div>
                        <div className='size'>
                            <div className='size_title'>
                                <h4>Size:</h4>
                                <span>{isActiveSize}</span>
                            </div>
                            <div className='size_link'>
                                {sizes.map((item) => (
                                    <span 
                                        className={classNames('size_item', {active: item === isActiveSize})} 
                                        key={item}
                                        onClick={() => addActiveSize(item)} 
                                    >
                                        {item}
                                    </span>
                                ))}
                                
                                
                            </div>
                            <Link to='/#' className='size_guide'><img src={sizeGuide} alt=''></img></Link>
                        </div>
                        <div className='buy'>
                            <span className='price'>{Math.round(price)} BYN</span>
                            <BtnSmall 
                                product = {{activeColor, url , id, price, name, isActiveSize}}
                            />
                            <Link to='/#'><img src={heart} alt=''/></Link>
                            <Link to='/#'><img src={scale} alt=''/></Link>
                        </div>
                        <div className="support_wrapper">
                            <div className='support'>
                                <Link to='/#'>
                                    <img width={28} src={truck} alt=''/>
                                    <span>Shipping &amp; Delivery</span>
                                </Link>
                                <Link to='/#'>
                                    <img width={28} src={refresh} alt=''/>
                                    <span>Returns &amp; Exchanges</span>
                                </Link>
                                <Link to='/#'>
                                    <img width={28} src={mail} alt=''/>
                                    <span>Ask a question</span>
                                </Link>
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
                                {uniqueColor.map((item, index) => (
                                    <span key={item[index]}>{item},</span>
                                ))}
                            </div>
                            <div className="additional_info_item">
                                <h4 className='info_subtitle'>Size:</h4>
                                {sizes.map((item, index) => (
                                    <span key={item[index]}>{item},</span>
                                ))}
                                
                            </div>
                            <div className="additional_info_item">
                                <h4 className='info_subtitle'>Material:</h4>
                                <span>{material}</span>
                            </div>
                        </div>
                        <div className='comments'>
                            <h3 className='comments_title'>Reviews</h3>
                            <div className="comments_top">
                                <div className='comments_top_left'>
                                    <Rating 
                                        rating={rating}
                                    />
                                    <span>{reviews.length} Rewiews</span>
                                </div>
                                <span 
                                    className="comments_top_right"
                                    onClick={handleReviewForm}
                                >
                                    <img src={write} alt='' />
                                    <span>Write a review</span>
                                </span>
                            </div>
                            <div className="comment">
                                {reviews.map((item) => (
                                    <div key={item.id}>
                                        <div className="comment_header">
                                            <div className='comment_name'>{item.name}</div>
                                            <div className="wrap_pub_date">
                                                <time className='pub_date'>3 months ago</time>
                                                <Rating 
                                                    rating={item.rating}
                                                />
                                            </div>
                                        </div>
                                        <div className='comment_text'>{item.text}</div>
                                    </div>
                                ))}
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProductCard