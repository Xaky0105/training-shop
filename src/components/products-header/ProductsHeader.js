import share from './img/share.svg'
import arrow from './img/arrow1.svg'
import adjustments from './img/adjustments.svg'
import chevron from './img/chevron-right.svg'
import viewGrid from './img/view-grid.svg'
import viewList from './img/view-list.svg'

import {Link} from 'react-router-dom'



function ProductsHeader(props) {
    
    return (
        <>
        <div className="productsHeader-wrapper">
            <div className="container">
                <div className="productsHeader-top">
                    <div className="path">
                        <a className='home' href="/#">Home</a>
                        <img width={14} src={arrow} alt=''></img>
                        <Link to='#'>{props.productType}</Link>
                    </div>
                    <a href="/#" className="share">
                        <img src={share} alt=''></img>
                        <p>Share</p>
                    </a>
                </div>
                <div className="productsHeader-title">
                    <h1>{props.productType}</h1>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='filter'>
                <div className='left_filter'>
                    <img src={adjustments} alt=''></img>
                    <p>Filter</p>

                </div>
                <div className='middle_filter'>
                    <img src={viewList} alt=''></img>
                    <img src={viewGrid} alt=''></img>
                </div>
                <div className='right_filter'>
                    <p>Bestsellers</p>
                    <img src={chevron} alt=""></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductsHeader