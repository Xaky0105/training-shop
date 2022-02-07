import Cart from '../cart/Cart'
import img1 from './img/thing1.jpg'


const arr = [
    { title: 'Item 1', price: 300, imageUrl: img1},
    { title: 'Item 2', price: 400},
    { title: 'Item 3', price: 330},
    { title: 'Item 4', price: 310},
    { title: 'Item 5', price: 600},
    { title: 'Item 6', price: 100},
    { title: 'Item 7', price: 50},
    { title: 'Item 8', price: 370},
  ]

function Clothers() {
    return (
            <div className="container">
                <div className="clothers">
                    <div className="clothers_header">
                        <h2 className="clothers_title">Title</h2>
                        <ul className="clothers_sort">
                            <a href="#"><li>NEW ARRIVALS</li></a>
                            <a href="#"><li>SPECIALS</li></a>
                            <a href="#"><li>BESTSELLERS</li></a>
                            <a href="#"><li>MOST VIEWED</li></a>
                            <a href="#"><li>FEATURED PRODUCTS</li></a>
                        </ul>
                    </div>
                    <div className="carts">
                        {arr.map((obj) => (
                            <Cart 
                                title = {obj.title}
                                price = {obj.price}
                                imageUrl = {obj.imageUrl}
                            />
                        ))}
                    </div>
                    <input type="submit" value="see all"></input>
                </div>
            </div>
    )
}

export default Clothers