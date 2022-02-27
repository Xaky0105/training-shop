import arrow from '../slider/img/arrow.svg'


import { Navigation} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'

import Cart from '../cart/Cart'
import { PRODUCTS } from '../../constants/constant'

import {useParams} from 'react-router-dom'




function RelatedProducts(props) {
    console.log(props)
    const {productType} = useParams();

    let targetProduct
    
    if(productType === "men") {

        targetProduct = PRODUCTS.men

    } else if (productType === "women") {

        targetProduct = PRODUCTS.women

    } else {
        targetProduct = PRODUCTS.men.concat(PRODUCTS.women)
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
                <div className="carts_related">
                    <Swiper
                        slidesPerView={4}
                        navigation={true}
                        modules={[Navigation]}
                        {...params}
                    >
                        {targetProduct.map((item) => (
                            <SwiperSlide>
                                <Cart
                                    sale={String(item.discount).slice(1,3)}
                                    card={item}
                                    productType={item.category}
                                    key={item.id}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>    
        </div>
        </>
    )
}


export default RelatedProducts