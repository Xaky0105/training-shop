import classNames from "classnames"

function Filter({productType, productsType, className, handleCheckSize, handleCheckColor, handleCheckBrand, handleCheckPrice, uniqueColor, uniqSize, getUniqueBrand, priceRanges, PRODUCTS}) {
    return (
        <>
        <div className={classNames(className)} data-test-id={`filters-${productType}`}>
            <div className="filter_col" >
                <h3 className="filter_col_title">Color</h3>
                <ul className="filter_col_list" data-test-id='filters-color'>
                    {uniqueColor && uniqueColor.map(function(item, index) {
                        return (
                        <li key={index}>
                            <label className="checkbox">
                                <input data-test-id={`filter-color-${item}`} onChange={(e) => handleCheckColor(item, e)} className="checkbox_input" type='checkbox' name="size" />
                                <div className="checkbox_box"></div>
                                {item}
                            </label>
                        </li> )
                    })}
                </ul>
            </div>
            <div className="filter_col" >
                <h3 className="filter_col_title">Size</h3>
                <ul className="filter_col_list" data-test-id='filters-size'>
                    {uniqSize.filter(item => item !== '').map(function(item, index) {
                        return (
                        <li key={index}>
                            <label className="checkbox">
                                <input data-test-id={`filter-size-${item}`} onChange={(e) => handleCheckSize(item, e)} className="checkbox_input" type='checkbox' name="size" />
                                <div className="checkbox_box"></div>
                                {item}
                            </label>
                        </li> )
                    })}
                </ul>
            </div>
            <div className="filter_col" >
                <h3 className="filter_col_title">Brand</h3>
                <ul className="filter_col_list" data-test-id='filters-brand'>
                    {productsType && getUniqueBrand(productsType).map((item) => (
                        <li key={item.brand}>
                            <label className="checkbox">
                                <input data-test-id={`filter-brand-${item.brand}`} onChange={(e) => handleCheckBrand(item.brand, e)} className="checkbox_input" type='checkbox' name="size" />
                                <div className="checkbox_box"></div>
                                {item.brand}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="filter_col">
                <h3 className="filter_col_title">Price</h3>
                <ul className="filter_col_list">
                    {priceRanges.map((item) => (
                        <li key={item}>
                            <label className="checkbox">
                                <input onChange={(e) => handleCheckPrice(item, e)} className="checkbox_input" type='checkbox' name="size" />
                                <div className="checkbox_box"></div>
                                {item}
                            </label>
                        </li>
                    ))}
                    
                </ul>
            </div>
           
            
        </div>
        </>
    )
}

export default Filter