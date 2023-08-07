import './Home.css';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Filter } from '../../components/Filter/Filter';
import {useFilter} from '../../context/filter-context';
import {Navbar} from '../../components/Navbar/Navbar';

export const Home = () =>{
  const [products,setProducts] = useState([])
  const {discount, rating,category,sortBy,price,isIncludeOutOfStock,isFastDelivery,searchInput} = useFilter();
  // console.log(isIncludeOutOfStock);

  useEffect(() => {
    (
      async()=>{
        try{
          const {data : {data}} = await axios.get('products.json')
          setProducts(data);
        }catch(err){
          console.log(err)
        }
      }
    )()
  },[])

  const getProductsBySearch = (products, searchInput) =>{
    // console.log(searchInput)
    const filteredArray = searchInput ? products.filter((product) => (product.title.toLowerCase().includes(searchInput.toLowerCase()) || product.productCategory.toLowerCase().includes(searchInput.toLowerCase()))) : products
    // console.log(filteredArray)
    return filteredArray
  }
  const searchedItems = getProductsBySearch(products, searchInput)

  const getProductsByIsOutOfStock = (products, isIncludeOutOfStock) =>{
    const filteredArray = !isIncludeOutOfStock ? products.filter(product => product.outOfStock === isIncludeOutOfStock) : products
    return filteredArray
  }
  const filteredByOutOfStock = getProductsByIsOutOfStock(searchedItems, isIncludeOutOfStock);

  const getProductsByDiscount =(products,discount)=>{
    const filteredArray = discount ? products.filter((product) => product.discount >= discount) : products;
    return filteredArray;
  }
  const filteredByDiscount = getProductsByDiscount(filteredByOutOfStock, discount)

  const getProductsByRating = (products,rating)=>{
    const filteredArray = rating ? products.filter(product => product.itemRating >= rating) :products;
    return filteredArray;
  }
  const filteredByRating = getProductsByRating(filteredByDiscount,rating)

  const getProductsByCategory = (products, category) =>{
    const filteredArray = category !== "all" ? products.filter(product => product.itemCategory === category) : products;
    return filteredArray;
  }
  const filteredByCategory = getProductsByCategory(filteredByRating, category);

  const getProductsBySort = (products, sortBy) =>{
    let filteredArray = [...products]
    if(sortBy==="lowToHigh")
    {
       filteredArray = filteredArray.sort((a, b) => a.newPrice -b.newPrice)
    }
    else if(sortBy === "highToLow")
    {
       filteredArray = filteredArray.sort((a, b) => b.newPrice -a.newPrice)
    }
    else{
       filteredArray = products
    }
    return filteredArray;
  }
  const filteredBySortBy = getProductsBySort(filteredByCategory, sortBy);

  const getProductsByPrice = (products, price) =>{
    const filteredArray = price ? products.filter(product => product.newPrice<= price) : products;
    return filteredArray;
  }
  const filteredByPrice = getProductsByPrice(filteredBySortBy, price);

  const getProductsByFastDelivery = (products, isFastDelivery) =>{
    const filteredArray = isFastDelivery ? products.filter(product => product.isFast === isFastDelivery) : products
    return filteredArray
  }
  const filteredByFastDelivery = getProductsByFastDelivery(filteredByPrice, isFastDelivery);

  return (
    <>
    <Navbar />
    <div className='page d-flex'>
    <Filter />
    <main className='products-container'>
    {
      filteredByFastDelivery?.length > 0 ? filteredByFastDelivery.map(product => <ProductCard key={product.id} product={product} from= "home"/>) : <h2>Sorry no Products found</h2>
    }
    </main>
    </div>
    </>
  );
}