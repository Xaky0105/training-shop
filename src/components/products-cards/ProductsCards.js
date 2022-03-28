import Cart from '../cart/Cart'

export const ProductsCards = ({ filteredProducts}) => {
    
    return (
        <ul className="carts">
            {filteredProducts && filteredProducts.map((item, index) => (
                <Cart
                    card={item}
                    productType={item.category}
                    key={index}
                    sale={String(item.discount).replace(/\D/g, '')}
                    
                />
            ))}
        </ul>
    )
    
}

export default ProductsCards