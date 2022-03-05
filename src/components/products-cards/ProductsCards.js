import Cart from '../cart/Cart'

export const ProductsCards = ({ productsType, filteredProducts, uniqueColor, uniqSize, getUniqueBrand, colorArr, sizeArr, brandArr}) => {
    
    return (
        <ul className="carts">
            {filteredProducts.map((item) => (
                <Cart
                    card={item}
                    productType={item.category}
                    key={item.id}
                    sale={String(item.discount).slice(1,3)}
                />
            ))}
        </ul>
    )
    
}

export default ProductsCards