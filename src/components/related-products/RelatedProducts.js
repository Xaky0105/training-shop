import arrow from '../slider/img/arrow.svg'


import { Navigation} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'

import Cart from '../cart/Cart'
// import { PRODUCTS } from '../../constants/constant'

import {useParams} from 'react-router-dom'
import { useSelector} from "react-redux"




function RelatedProducts(props) {
    const PRODUCTS = useSelector(state => state.products.products)
    const {productType} = useParams();

    let targetProduct
    
    if(productType === "men" && PRODUCTS !== undefined) {

        targetProduct = PRODUCTS.men

    } else if (productType === "women" && PRODUCTS !== undefined) {

        targetProduct = PRODUCTS.women

    }

    const params = {
        navigation: {
          nextEl: '.arr_right',
          prevEl: '.arr_left'
        },
        breakpoints: {
            360: {
                slidesPerView: 2,
            },
            550: {
                slidesPerView: 3,
            },
            800: {
                slidesPerView: 4,
            }
        }
      }

    return (
        
        <>
        <div className="container">
            <div className="related_slider" data-test-id='related-slider'>
                <div className="header_related">
                    <h4 className='header_related-title'>RELATED PRODUCTS</h4>
                    <div className='header_related-arrow'>
                        <img className='arr_left' src={arrow} alt=""></img>
                        <img className='arr_right' src={arrow} alt=""></img>
                    </div>
                </div>
                <ul className="carts_related">
                    <Swiper
                        slidesPerView={2}
                        navigation={true}
                        modules={[Navigation]}
                        {...params}
                    >
                        
                        {targetProduct !== undefined && targetProduct.filter(item => item.id === props.id ? false : true).map((item) => (
                            <SwiperSlide key={item.id}>
                                <Cart
                                    sale={String(item.discount).replace(/\D/g, '')}
                                    card={item}
                                    productType={item.category}
                                    
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ul>
            </div>    
        </div>
        </>
    )
}


export default RelatedProducts