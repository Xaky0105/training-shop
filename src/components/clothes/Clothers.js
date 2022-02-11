import Cards from "../cards/Cards"


function Clothers(props) {
    
    return (
            <div className="container">
                <div className="clothers">
                    <div className="clothers_header">
                        <h2 className="clothers_title">{props.title}</h2>
                        <ul className="clothers_sort">
                            <a href="/#"><li>NEW ARRIVALS</li></a>
                            <a href="/#"><li>SPECIALS</li></a>
                            <a href="/#"><li>BESTSELLERS</li></a>
                            <a href="/#"><li>MOST VIEWED</li></a>
                            <a href="/#"><li>FEATURED PRODUCTS</li></a>
                        </ul>
                    </div>
                    <Cards />
                    <input type="submit" value="see all"></input>
                </div>
            </div>
    )
}

export default Clothers