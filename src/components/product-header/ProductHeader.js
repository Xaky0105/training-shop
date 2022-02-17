import share from '../products-header/img/share.svg'
import arr from '../products-header/img/arrow1.svg'
import { Link } from 'react-router-dom'


import { product } from "../../constants/constant"
import Rating from '../rating/Rating'

function ProductHeader(props) {
    let targetProduct
    if(props.productType === "men") {

        targetProduct = product.men[props.id - 1]

    } else if (props.productType === "women") {

        targetProduct = product.women[props.id - 1]

    }
    console.log(targetProduct)
    return (
        
        <>
        <div className="productHeader-wrapper">
            <div className="container">
                <div className="productHeader-top">
                    <div className="path">
                        <Link to='/' className='home'>Home</Link>
                        <img width={14} src={arr} alt=''></img>
                        <Link to={`/${targetProduct.productType}`} className='home'>{targetProduct.productType}</Link>
                        <img width={14} src={arr} alt=''></img>
                        <Link to='#'>{targetProduct.title}</Link>
                    </div>
                    <a href="/#" className="share">
                        <img src={share} alt=''></img>
                        <p>Share</p>
                    </a>
                </div>
                <div className="productHeader-title">
                    <h1>{targetProduct.title}</h1>
                </div>
                <div className='productHeader-bot'>
                    <div className='productHeader-bot-rating'>
                        <Rating />
                        <span>2 Reviews</span>
                    </div>
                    <div className='productHeader-bot_right'>
                        <div className="sku_wrap">
                            <h4 className='sku_title'>SKU:</h4>
                            <span>777</span>
                        </div>
                        <div className="availability_wrap">
                            <h4 className='availability_title'>Availability:</h4>
                            <span>In Stock</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductHeader