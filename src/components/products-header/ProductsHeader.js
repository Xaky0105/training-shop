import share from './img/share.svg'
import arrow from './img/arrow1.svg'
import adjustments from './img/adjustments.svg'
import viewGrid from './img/view-grid.svg'
import viewList from './img/view-list.svg'
import cross from './img/crossfilter.png'

import {Link} from 'react-router-dom'

import Filter from '../filter/Filter'


import classNames from 'classnames'



function ProductsHeader({productType, productsType, uniqueColor, uniqSize, getUniqueBrand, handleCheckSize, handleCheckColor, handleCheckBrand, handleCheckPrice, colorArr, sizeArr, brandArr, priceArr, filteredProducts, checkLength, priceRanges,onClickCross,filterOpen, PRODUCTS}) {
   
    return (
        <>
        <div className="productsHeader-wrapper">
            <div className="container">
                <div className="productsHeader-top">
                    <div className="path">
                        <Link to='/' className='home'>Home</Link>
                        <img width={14} src={arrow} alt=''></img>
                        <Link className='product_type' to={`/${productType}`}>{productType}</Link>
                    </div>
                    <Link to='/#' className="share">
                        <img src={share} alt=''></img>
                        <p>Share</p>
                    </Link>
                </div>
                <div className="productsHeader-title">
                    <h1>{productType}</h1>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='filter_nav'>
                <div className='left_filter_nav' onClick={onClickCross} data-test-id='filter-button'>
                    <img className = {classNames('filter_img', {active: filterOpen })} src={adjustments} alt=''></img>
                    <img className = {classNames('cross_img', {active: !filterOpen })} src={cross}  alt=''></img>
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
                className = {classNames('filter', {visible: filterOpen} )}
                PRODUCTS = {PRODUCTS}
                productType = {productType}
                productsType = {productsType}
                uniqueColor = {uniqueColor}
                uniqSize = {uniqSize}
                handleCheckSize = {handleCheckSize}
                handleCheckColor = {handleCheckColor}
                handleCheckBrand = {handleCheckBrand}
                handleCheckPrice = {handleCheckPrice}
                getUniqueBrand = {getUniqueBrand}
                priceRanges = {priceRanges}
            />
            <ul className='filtred'>
                {checkLength() ? (
                    <>
                        <span className='length'>{`${filteredProducts.length} item found`}</span>
                        {colorArr.map((obj) => (
                            <span key={obj} className='filtred_category'>{`Color: ${obj}`}</span>
                        ))}
                        {sizeArr.map((obj) => (
                            <span key={obj} className='filtred_category'>{`Size: ${obj}`}</span>
                        ))}
                        {brandArr.map((obj) => (
                            <span key={obj} className='filtred_category'>{`Brand: ${obj}`}</span>
                        ))}
                        {priceArr.map((obj) => (
                            <span key={obj} className='filtred_category'>{`Price: ${obj}`}</span> 
                        ))}
                    </>
                ) : ""} 
            
            </ul>
        </div>
        </>
    )
}

export default ProductsHeader