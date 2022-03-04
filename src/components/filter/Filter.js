import classNames from "classnames"

function Filter({productType, productsType, className, onChange, uniqueColor, uniqSize, getUniqueBrand}) {
    return (
        <>
        <div className={classNames(className)} data-test-id={`filters-${productType}`}>
            <div className="filter_col" data-test-id='filters-color'>
                <h3 className="filter_col_title">Color</h3>
                <ul className="filter_col_list">
                    {uniqueColor.map((item) => (
                        <li>
                            <label className="checkbox">
                                <input onChange={() => onChange(item)} className="checkbox_input" type='checkbox' name="size" />
                                <div className="checkbox_box"></div>
                                {item}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="filter_col" data-test-id='filters-size'>
                <h3 className="filter_col_title">Size</h3>
                <ul className="filter_col_list">
                    {uniqSize.filter(item => item !== '').map((item) => (
                        <li>
                            <label className="checkbox">
                                <input onChange={() => onChange(item)} className="checkbox_input" type='checkbox' name="size" />
                                <div className="checkbox_box"></div>
                                {item}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="filter_col" data-test-id='filters-brand'>
                <h3 className="filter_col_title">Brand</h3>
                <ul className="filter_col_list">
                    {getUniqueBrand(productsType).map((item) => (
                        <li>
                            <label className="checkbox">
                                <input onChange={() => onChange(item.brand)} className="checkbox_input" type='checkbox' name="size" />
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
                    <li>
                        <label className="checkbox">
                            <input className="checkbox_input" type='checkbox' name="size" />
                            <div className="checkbox_box"></div>
                            250-300 BYN
                        </label>
                    </li>
                    <li>
                        <label className="checkbox">
                            <input className="checkbox_input" type='checkbox' name="size" />
                            <div className="checkbox_box"></div>
                            200-250 BYN
                        </label>
                    </li>
                    <li>
                        <label className="checkbox">
                            <input className="checkbox_input" type='checkbox' name="size" />
                            <div className="checkbox_box"></div>
                            100-200 BYN
                        </label>
                    </li>
                    <li>
                        <label className="checkbox">
                            <input className="checkbox_input" type='checkbox' name="size" />
                            <div className="checkbox_box"></div>
                            50-100 BYN
                        </label>
                    </li>
                    <li>
                        <label className="checkbox">
                            <input className="checkbox_input" type='checkbox' name="size" />
                            <div className="checkbox_box"></div>
                            0-50 BYN
                        </label>
                    </li>
                </ul>
            </div>
           
            
        </div>
        </>
    )
}

export default Filter