import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {ShopContext} from '../components/ShopContext';
import { Products } from '../components/Products';
import { CartItem } from '../components/CartItem';
import style from "./style.css";

// Kundvagn med alla produkter som lagts till  
export const Cart = () => {
    const {cart, getTotalCartAmount, checkout, emptyAllProductsFromCart} = useContext(ShopContext);
    const cartCount = getTotalCartAmount();

    const navigate = useNavigate();
// nedan kod kollar om 1. om det finns produkter (som har id) i kundvagnen och mappad ut dem isåfall. Om cartcount är mer än 0 dvs har produkter i sig så visas kundvagnen annars att kundvagnen är tom.
return(
<div className="cart">
  <div className='items-in-Cart'>
    {Products.map((product) => {
      if (cart[product.id] !== 0) {
        return <CartItem data={product} />;
      }
    })}
  </div>

  {cartCount > 0 ? (
    <div className="checkout">
      <div>
    <h1>Your Cart Items</h1>
  </div>
      <p> Subtotal: ${cartCount} </p>
      <button onClick={() => navigate("/")}> Continue Shopping </button>
      <button
        onClick={() => {
          checkout();
          navigate("/");
        }}
      >
        {" "}
        Checkout{" "}
      </button>
      <button onClick={()=> {
          emptyAllProductsFromCart();
          navigate("/")
      }}> Clear Cart </button>
    </div>
  ) : (
    <h1> Your Shopping Cart is Empty</h1>
  )}
</div>)
}


