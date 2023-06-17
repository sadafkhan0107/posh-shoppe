import './SingleProductPage.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Fragment } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';


export const SingleProductPage = () => {
    const params = useParams();
    // console.log(params)
    const[products, setProducts] = useState([])

    useEffect(() => {
        (
            async() =>{
            try{
                const {data: {data}} = await axios.get('/products.json')
                setProducts(data);
            }catch(err){
                console.log("Something went wrong");
            }
        }
        )()
    },[]
    )
    // console.log(products)
    const product = products.length>0 && products?.find(product => product.id === params.prodId)
    const{id,imgUrl, title, productCategory, oldPrice,description, newPrice, discount, itemRating} = product;
    return (
    <Fragment>
        <Navbar />
        <div className="product-container">
            <div className="prod-image-container">
                <img className="prod-image" src={imgUrl} alt={productCategory}/>
            </div>
            <div className="prod-content-container">
        <div className="product-details">
          <h1>{title}</h1>
          <h3>{description} </h3>
          <div >
            <span className="rating-font">{itemRating}</span>{" "}
            <span className="material-icons-outlined star">
                star
                </span>
          </div>
        </div>
        <div className="card-price ">
          <div>
            <span className="product-final-price">Rs. {newPrice}</span>
            <span className="prod-price-strike-through">Rs. {oldPrice}</span>
            <span className="prod-discount">({discount}% OFF)</span>
          </div>
          <p className="tax-text">inclusive of all taxes</p>
        </div>
        <div className="delivery-options">
          <h3>Delivery Options</h3>
          <div className="shipping">
            <span className="material-icons-outlined">local_shipping</span>{" "}
            <span>Get it in 3 days</span>
          </div>
          <div className="shipping">
            <span className="material-icons-outlined">currency_rupee</span>{" "}
            <span>Pay on delivery available</span>
          </div>
          <div className="shipping">
            <span className="material-icons-outlined">change_circle</span>{" "}
            <span>30 days exchange and return available</span>
          </div>
        </div>
        </div>
       </div> 
    </Fragment>
    )
}