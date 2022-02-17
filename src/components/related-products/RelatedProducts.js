import arrow from '../slider/img/arrow.svg'
import Cards from '../cards/Cards'




function RelatedProducts() {
    return (
        <>
        <div className="container">
            <div className="header_related">
                <h4 className='header_related-title'>RELATED PRODUCTS</h4>
                <div className='header_related-arrow'>
                    <img className='arr_left' src={arrow} alt=""></img>
                    <img className='arr_right' src={arrow} alt=""></img>
                </div>
            </div>
            <Cards 
                productType = 'related'
            />
        </div>
        </>
    )
}


export default RelatedProducts