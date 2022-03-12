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




const safeLinks = [
    {id: 1, path: '#', img: stripe},
    {id: 2, path: '#', img: aes},
    {id: 3, path: '#', img: paypal},
    {id: 4, path: '#', img: visa},
    {id: 5, path: '#', img: mastercard},
    {id: 6, path: '#', img: discover},
    {id: 7, path: '#', img: americanExp},
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

    const [isActiveImg, setIsActiveImg] = useState(images[0].color);
    function addActiveImg(color) {
        let newColor = [...images].filter( item => item.color === color) 
        setIsActiveImg(newColor[0].color)  
    }
    console.log(isActiveImg)

    const [isActiveSize, setIsActiveSize] = useState(sizes[0]);
    function addActiveSize(size) {
        let newSize = [...sizes].filter( item => item === size)
        setIsActiveSize(newSize[0])  
    }
    console.log(isActiveSize)
    useEffect(() => {
        console.log('render')
        setIsActiveImg(images[0].color)
        setIsActiveSize(sizes[0])
        
        // eslint-disable-next-line
    }, [id])
    
    return (
        <>
           
            <div className="container">
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
                                <span>{isActiveImg}</span>
                            </div>
                            <div className='color_img'>
                                {getUniqueImg(images).map((item, index) => (
                                    <span 
                                        key={item[index]} 
                                        onClick={() => addActiveImg(item.color)} 
                                        className={classNames('color_img_wrap', {active: item.color === isActiveImg})}
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
                                {sizes.map((item, index) => (
                                    <span 
                                        className={classNames('size_item', {active: item === isActiveSize})} 
                                        key={index}
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
                                title = 'Add to card'
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
                                <Link to='/#' className="comments_top_right">
                                    <img src={write} alt='' />
                                    <span>Write a review</span>
                                </Link>
                            </div>
                            <div className="comment">
                                {reviews.map((item, id) => (
                                    <>
                                        <div className="comment_header">
                                            <div className='comment_name'>{item.name}</div>
                                            <div className="wrap_pub_date">
                                                <time className='pub_date'>3 months ago</time>
                                                <Rating 
                                                    key={id}
                                                    rating={item.rating}
                                                />
                                            </div>
                                        </div>
                                        <div className='comment_text'>{item.text}</div>
                                    </>
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