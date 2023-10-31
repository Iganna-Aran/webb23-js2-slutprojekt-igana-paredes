import { createContext, useEffect, useState } from "react";
import { Products } from "./Products";
import style from "./style.css";

// exporterar shopContext som är en context som används i flera komponenter
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < Products.length +1; i++) {
        cart[i] = 0;
    }
    return cart;
};
//  i shopContextProvider samlas funktionalitet som används i flera komponenter och de flesta funktioner har självförklarande namn
export const ShopContextProvider = (props) => {
    const [cart, setCart] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cart) {
        if (cart[item] > 0) {
          let itemInfo = Products.find((product) => product.id === Number(item));
          totalAmount += cart[item] * itemInfo.price;
        }
      }
      return totalAmount;
    };

    const addToCart = (product) => {
        if (cart[product] + 1 <= Products[product - 1].quantity) {
          setCart((prev) => ({ ...prev, [product]: prev[product] + 1 }));
        } else {
          alert("Insufficient stock " + Products[product - 1].name);
        }
      };

      const removeFromCart = (itemId) => {
        setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };
    
      const updateCartItemCount = (newAmount, itemId) => {
        setCart((prev) => ({ ...prev, [itemId]: newAmount }));
      };
    
      const checkout = () => {
        alert("Thank you for your purchase!");
        for (const item in cart) {
          if (cart[item] > 0) {
            let itemInfo = Products.find((product) => product.id === Number(item));
            itemInfo.quantity -= cart[item];
          }
        }
        setCart(getDefaultCart());
      };

      const emptyAllProductsFromCart = () => {
        setCart(getDefaultCart());
      };

      const contextValues = {
        cart,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        checkout,
        updateCartItemCount,
        emptyAllProductsFromCart
      };

        return (
            <ShopContext.Provider value={contextValues}>
                {props.children}
            </ShopContext.Provider>
        );
    };
