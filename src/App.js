import './App.css';
import { ProductCard } from './components/ProductCard/ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Filter } from './components/Filter/Filter';
import {useFilter} from './context/filter-context/filter-context'

function App() {
  const [products,setProducts] = useState([])
  const {discount, rating} = useFilter();
  console.log(discount);

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
  const getProductsByDiscount =(products,discount)=>{
    const filteredArray = discount ? products.filter((product) => product.discount >= discount) : products;
    return filteredArray;
  }
  const filteredByDiscount = getProductsByDiscount(products, discount)

  const getProductsByRating = (products,rating)=>{
    const filteredByRating = rating ? products.filter(product => product.itemRating >= rating) :products;
    return filteredByRating;
  }
  const filteredByRating = getProductsByRating(filteredByDiscount,rating)
  
  return (
    <div className='home-page'>
    <Filter />
    <main className='container'>
    {
      filteredByRating?.length > 0 && filteredByRating.map(product => <ProductCard key={product.id} product={product}/>)
    }
    </main>
    </div>
  );
}

export default App;
