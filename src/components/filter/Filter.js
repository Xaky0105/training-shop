import classNames from "classnames"

function Filter(props) {
    console.log(props)
    
    return (
        <>
        <div className={classNames(props.className)} data-test-id={`filters-${props.productType}`}>
            <div className="filter_col" data-test-id='filters-color'>
                <h3 className="filter_col_title">Color</h3>
                <div className="filter_col_list">
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        Black
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        Cyan
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        Green
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        Grey
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        PinkWhiteBlue
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        White
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        Blue
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        Blue
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        Blue
                    </label>
                </div>
            </div>
            <div className="filter_col" data-test-id='filters-size'>
                <h3 className="filter_col_title">Size</h3>
                <div className="filter_col_list">
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        XL
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        L
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        M
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        S
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        Xs
                    </label>
                </div>
            </div>
            <div className="filter_col" data-test-id='filters-brand'>
                <h3 className="filter_col_title">Brand</h3>
                <div className="filter_col_list">
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        Ck
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        H&amp;M

                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        Kalles
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        Levi's
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        Monki
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        Nike
                    </label>
                </div>
            </div>
            <div className="filter_col">
                <h3 className="filter_col_title">Price</h3>
                <div className="filter_col_list">
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        $1200+
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        $600-$1200
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        $300-$600
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        $150-$300
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        $50-$150
                    </label>
                    <label className="checkbox">
                        <input className="checkbox_input" type='checkbox' name="size" />
                        <div className="checkbox_box"></div>
                        $7-$50
                    </label>
                </div>
            </div>
           
            
        </div>
        </>
    )
}

export default Filter