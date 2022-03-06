import Cart from '../cart/Cart'

export const ProductsCards = ({ filteredProducts}) => {
    
    return (
        <ul className="carts">
            {filteredProducts.map((item) => (
                <Cart
                    card={item}
                    productType={item.category}
                    key={item.id}
                    sale={String(item.discount).replace(/\D/g, '')}
                    
                />
            ))}
        </ul>
    )
    
}

export default ProductsCards