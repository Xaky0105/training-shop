import ProductsCards from '../components/products-cards/ProductsCards'
import ProductsHeader from "../components/products-header/ProductsHeader"

import loading from '../components/products-header/img/Square-Loading.svg'
import { PRODUCTS } from '../constants/constant'


import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'


function Products() {
    const {productType} = useParams();
   
    const productsType = PRODUCTS[productType]
    const sizesArr = productsType.map(item => item.sizes)
    const imagesArr = productsType.map(item => item.images).flat(Infinity)

    const [filterOpen, setFilterOpen] = useState(false);
    function onClickCross() {
        setFilterOpen(!filterOpen)
    }
    
    //size
    function getSize(arr) {
        let size = []
        for (let i = 0; i < arr.length; i++) {
            size += `,${arr[i].concat(arr[i + 1])}`
        }
        return size.split(',')
    }
    
    const uniqSize = [...new Set(getSize(sizesArr))]
    //colors
    const colors = imagesArr.map((obj) => {
        return obj.color
    })
   
    const uniqueColor = [...new Set(colors)]
    //brand
    function getUniqueBrand(arr) {
        let uniq = {}
        return arr.filter(obj => !uniq[obj.brand] && (uniq[obj.brand] = true))  
    }

    let priceRanges = [
        '0 BYN - 50 BYN',
        '51 BYN - 100 BYN',
        '101 BYN - 150 BYN',
        '151 BYN - 200 BYN',
        '201 BYN - 300 BYN',
    ]
    
    
    let [sizeArr, setSizeArr] = useState([])
    let [colorArr, setColorArr] = useState([])
    let [brandArr, setBrandArr] = useState([])
    let [priceArr, setPriceArr] = useState([])
    let [filteredProducts, setFilteredProducts] = useState([])

    console.log(priceArr)
    function handleCheckSize(item, e) {
        if (e.target.checked) {
            sizeArr = [...sizeArr, item]
            setSizeArr(sizeArr)
        } else {
            let newSize = sizeArr.filter((el) => el !== item);
            setSizeArr(newSize);
          }
    }
    function handleCheckColor(item, e) {
        if (e.target.checked) {
            colorArr = [...colorArr, item]
            setColorArr(colorArr)
        } else {
            let newColor = colorArr.filter((el) => el !== item);
            setColorArr(newColor);
          }
    }
    function handleCheckBrand(item, e) {
        if (e.target.checked) {
            brandArr = [...brandArr, item]
            setBrandArr(brandArr)
        } else {
            let newBrand = brandArr.filter((el) => el !== item);
            setBrandArr(newBrand);
          }
    }
    function handleCheckPrice(item, e) {
        if (e.target.checked) {
            priceArr = [...priceArr, item]
            setPriceArr(priceArr)
        } else {
            let newPrice = priceArr.filter((el) => el !== item)
            setPriceArr(newPrice)
        }
    }
    
    useEffect(() => {
        console.log('render')
        setFilteredProducts(() => {
            let filteredProduct = [...productsType];

            const getPrice = (productsType) => {
                return priceArr.some((item) => {
                  let minMax = item.replaceAll(/[BYN]/g, '').split('-');
                  let [min, max] = minMax;
                  if (max) {
                    return productsType.price <= Number(max) && productsType.price >= Number(min);
                  } else {
                    return productsType.price >= Number(min);
                  }
                });
              };
        
            const filterAll = (productsType) => {
                if (colorArr.length !== 0 && !productsType.images.some((image) => colorArr.includes(image.color))) {
                    return false;
                }
                if (sizeArr.length !== 0 && !productsType.sizes.some((size) => sizeArr.includes(size))) {
                    return false;
                }
                if (brandArr.length !== 0 && !brandArr.includes(productsType.brand)) {
                    return false;
                }
                if (priceArr.length !== 0 && !getPrice(productsType)) {
                    return false
                }
                return true;
            };
            filteredProduct = productsType.filter(filterAll);
            return [...filteredProduct];
        });
        // eslint-disable-next-line
    }, [sizeArr, brandArr, colorArr, priceArr])

    useEffect(() => {
        document.querySelectorAll('input[type="checkbox"]').forEach(e => e.checked = false)
        setFilterOpen(false)

        setSizeArr([])
        setColorArr([])
        setBrandArr([])
        setPriceArr([])
       
    }, [productsType])

    const checkLength = () => {
        return colorArr.length !== 0 || sizeArr.length !== 0 || brandArr.length !== 0 || priceArr.length !== 0
    }

    return (
        <div className="products-page" data-test-id={`products-page-${productType}`}>
            <ProductsHeader 
                productType = {productType}
                productsType = {productsType}
                uniqueColor = {uniqueColor}
                uniqSize = {uniqSize}
                getUniqueBrand = {getUniqueBrand}
                handleCheckSize = {handleCheckSize}
                handleCheckColor = {handleCheckColor}
                handleCheckBrand = {handleCheckBrand}
                handleCheckPrice = {handleCheckPrice}
                colorArr = {colorArr}
                sizeArr = {sizeArr}
                brandArr = {brandArr}
                priceArr = {priceArr}
                filteredProducts = {filteredProducts}
                checkLength = {checkLength}
                priceRanges = {priceRanges}
                onClickCross = {onClickCross}
                filterOpen = {filterOpen}

            />
            <div className="container">
                <ProductsCards
                    productsType = {productsType}
                    uniqueColor = {uniqueColor}
                    uniqSize = {uniqSize}
                    getUniqueBrand = {getUniqueBrand}
                    colorArr = {colorArr}
                    sizeArr = {sizeArr}
                    brandArr = {brandArr}
                    setFilteredProducts = {setFilteredProducts}
                    filteredProducts = {filteredProducts}
                   
                    
                />
            </div>
            <img className="loading" src={loading} alt=''></img>  
                
        </div>
    )
}

export default Products