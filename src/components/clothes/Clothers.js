import { useState } from "react"
import Cards from "../cards/Cards"


export const MAIN_CLOTHES_BLOCK_MENU = [
    {
        particularName: 'isNewArrivals',
        name: 'NEW ARRIVALS',
        id: 1
    },
    {
        particularName: 'isSpecial',
        name: 'SPECIALS',
        id: 2
    },
    {
        particularName: 'isBestseller',
        name: 'BESTSELLERS',
        id: 3
    },
    {
        particularName: 'isMostViewed',
        name: 'MOST VIEWED',
        id: 4
    },
    {
        particularName: 'isFeatured',
        name: 'FEATURED PRODUCT',
        id: 5
    },
]

function Clothers(props) {
    const [filtered, setFiltered] = useState(MAIN_CLOTHES_BLOCK_MENU[0])
    function filterClothes(particularName) {
        let newClothesParticular = [...MAIN_CLOTHES_BLOCK_MENU].filter( item => item.particularName === particularName)
        setFiltered(newClothesParticular)
    }
    return (
            <div className="container">
                <div className="clothers">
                    <div className="clothers_header">
                        <h2 className="clothers_title">{props.title}</h2>
                        <ul className="clothers_sort">
                            {MAIN_CLOTHES_BLOCK_MENU.map((item) => (
                                <li key={item.id} onClick={() => filterClothes(item.particularName)}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <Cards 
                        productType = {props.productType}
                        filtered = {filtered}
                        
                    />
                    <input type="submit" value="see all"></input>
                </div>
            </div>
    )
}

export default Clothers