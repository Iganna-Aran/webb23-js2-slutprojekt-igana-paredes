import {ShopContext} from '../components/ShopContext';
import {useContext} from 'react';

// detta är en komponent för varje produkt i varukorgen
export const CartItem = (props) => {
    const {id, name, picture, price, } = props.data;
    const {cart, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

    return (
        <div className="cartItem">
        <img src={picture} />
        <div className="description">
          <p>
            <b>{name}</b>
          </p>
          <p> Price: ${price}</p>
          <div className="countHandler">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input
              value={cart[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)}> + </button>
          </div>
        </div>
      </div>
    );
    }
