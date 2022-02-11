import Cart from '../cart/Cart'
import img1 from '../clothes/img/thing1.jpg'
import img2 from '../clothes/img/thing2.jpg'
import img3 from '../clothes/img/thing3.jpg'
import img4 from '../clothes/img/thing4.jpg'
import img5 from '../clothes/img/thing5.jpg'
import img6 from '../clothes/img/thing6.jpg'
import img7 from '../clothes/img/thing7.jpg'
import img8 from '../clothes/img/thing8.jpg'


const women = [
    { id: 1, title: 'Womens tracksuit Q109', price: 30, imageUrl: img1},
    { id: 2, title: 'Womens tracksuit Q109', price: 30, imageUrl: img2},
    { id: 3, title: 'Womens tracksuit Q109', price: 30, imageUrl: img3},
    { id: 4, title: 'Womens tracksuit Q109', price: 30, imageUrl: img4},
    { id: 5, title: 'Womens tracksuit Q109', price: 30, imageUrl: img5},
    { id: 6, title: 'Womens tracksuit Q109', price: 30, imageUrl: img6},
    { id: 7, title: 'Womens tracksuit Q109', price: 30, imageUrl: img7},
    { id: 8, title: 'Womens tracksuit Q109', price: 30, imageUrl: img8},
]




function Cards(props) {
    return (
        <>
        <div className="carts">
            {women.map((obj) => (
                <Cart 
                    id = {obj.id}
                    title = {obj.title}
                    price = {obj.price}
                    imageUrl = {obj.imageUrl}
                />
            ))}
        </div>
        </>
        
    )
}

export default Cards