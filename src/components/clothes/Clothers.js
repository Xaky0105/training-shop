import { useState } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"
import HomeCards from "../home-cards/HomeCards"


export const MAIN_CLOTHES_BLOCK_MENU = [
    {
        particularName: 'isNewArrivals',
        name: 'NEW ARRIVALS',
        
    },
    {
        particularName: 'isSpecial',
        name: 'SPECIALS',
        
    },
    {
        particularName: 'isBestseller',
        name: 'BESTSELLERS',
       
    },
    {
        particularName: 'isMostViewed',
        name: 'MOST VIEWED',
        
    },
    {
        particularName: 'isFeatured',
        name: 'FEATURED PRODUCT',
       
    },
]

function Clothers(props) {
    const [filtered, setFiltered] = useState(MAIN_CLOTHES_BLOCK_MENU[0])
    function filterClothes(particularName) {
        let newClothesParticular = [...MAIN_CLOTHES_BLOCK_MENU].filter( item => item.particularName === particularName)
        setFiltered(newClothesParticular[0])
    }
    console.log(filtered)
    return (
            <div className="container">
                <div className="clothers">
                    <div className="clothers_header">
                        <h2 className="clothers_title">{props.title}</h2>
                        <ul className="clothers_sort">
                            {MAIN_CLOTHES_BLOCK_MENU.map((item) => (
                                <li 
                                    key={item.name} 
                                    onClick={() => filterClothes(item.particularName)}
                                    className={classNames('clothers_sort_item', {active: item.particularName === filtered.particularName})} 
                                    data-test-id={`clothes-${props.productType}-${item.particularName}`}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <HomeCards 
                        productType = {props.productType}
                        filtered = {filtered}
                        
                    />
                    <Link to={props.productType} className='see_all' >See all</Link>
                </div>
            </div>
    )
}

export default Clothers