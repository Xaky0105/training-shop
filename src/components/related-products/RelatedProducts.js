import arrow from '../slider/img/arrow.svg'
// import Cards from '../cards/Cards'

import { Navigation} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'

import Cart from '../cart/Cart'
import { product } from '../../constants/constant'

import {useParams} from 'react-router-dom'




function RelatedProducts(props) {
    console.log(props)
    const {productType} = useParams();

    let targetProduct
    
    if(productType === "men") {

        targetProduct = product.men

    } else if (productType === "women") {

        targetProduct = product.women

    } else {
        targetProduct = product.men.concat(product.women)
    }

    const params = {
        navigation: {
          nextEl: '.arr_right',
          prevEl: '.arr_left'
        },
        breakpoints: {
            300: {
                slidesPerView: 2,
            },
            450: {
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
            <div class="related_slider" data-test-id='related-slider'>
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
                        {targetProduct.map((obj) => (
                            <SwiperSlide>
                                <Cart
                                    key = {obj.id}
                                    id = {obj.id}
                                    productType = {productType}
                                    title = {obj.title}
                                    price = {obj.price}
                                    imageUrl = {obj.imageUrl}
                                    rating = {obj.rating}
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