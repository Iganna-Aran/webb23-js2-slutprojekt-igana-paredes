import React, {useContext} from 'react';
import {ShopContext} from '../components/ShopContext';

// produktview visar produkterna dvs bild och övrig info
export const ProductView = (props) => {

const {id, name, picture, price, quantity} = props.data;
const {addToCart, cart} = useContext(ShopContext);

const cartItemsCount = cart[id];
// när man trycker på onClick så körs addToCart funktionen som finns i ShopContext.js
return (
        <div className="product">
        <img src={picture} alt="product image"/>
        <div className="description">
          <p>
            <b>{name}</b>
          </p>
          <p> ${price}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemsCount > 0 && <> ({cartItemsCount})</>}
        </button>
      </div>     
  )
};