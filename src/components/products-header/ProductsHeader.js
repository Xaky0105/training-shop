import share from './img/share.svg'
import arrow from './img/arrow1.svg'
import adjustments from './img/adjustments.svg'
import viewGrid from './img/view-grid.svg'
import viewList from './img/view-list.svg'

import {Link} from 'react-router-dom'

import Filter from '../filter/Filter'

import { useState } from 'react'
import classNames from 'classnames'



function ProductsHeader(props) {
    const [filterOpen, setFilterOpen] = useState(false);
    function onClickCross() {
        setFilterOpen(!filterOpen)
    }
    console.log(props)
    return (
        <>
        <div className="productsHeader-wrapper">
            <div className="container">
                <div className="productsHeader-top">
                    <div className="path">
                        <Link to='/' className='home'>Home</Link>
                        <img width={14} src={arrow} alt=''></img>
                        <Link to={`/${props.productType}`}>{props.productType}</Link>
                    </div>
                    <Link to='/#' className="share">
                        <img src={share} alt=''></img>
                        <p>Share</p>
                    </Link>
                </div>
                <div className="productsHeader-title">
                    <h1>{props.productType}</h1>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='filter_nav'>
                <div className='left_filter_nav' onClick={onClickCross} data-test-id='filter-button'>
                    <img src={adjustments} alt=''></img>
                    <p>Filter</p>

                </div>
                <div className='right_filter_nav'>
                <img src={viewList} alt=''></img>
                    <img src={viewGrid} alt=''></img>
                </div>
            </div>
        </div>
        <div className='container'>
            <Filter 
                className={classNames('filter', {visible: filterOpen})}
                productType={props.productType}
            />
        </div>
        </>
    )
}

export default ProductsHeader