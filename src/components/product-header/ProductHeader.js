import share from '../products-header/img/share.svg'


import { product } from "../../constants/constant"
import Rating from '../rating/Rating'

function ProductHeader(props) {
    
    
    return (
        <>
        <div className="productHeader-wrapper">
            <div className="container">
                <div className="productHeader-top">
                    <div className="path">
                        <a className='home' href="/#">Home</a>
                        <img width={14} src='' alt=''></img>
                        <a href="/#">{props.title}</a>
                    </div>
                    <a href="/#" className="share">
                        <img src={share} alt=''></img>
                        <p>Share</p>
                    </a>
                </div>
                <div className="productHeader-title">
                    <h1>{product[0].title}</h1>
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