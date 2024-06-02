import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

function CardItems() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center p-4 m-4 font-bold">
      <h1>CART ITEMS</h1>
      <button className="bg-black text-white p-2 m-2 rounded-md font-thin" onClick={handleClearCart}>Clear Cart</button>
      {cartItems.length === 0 && (
        <h1>Cart is empty. Add Items to the cart!</h1>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
}

export default CardItems;
