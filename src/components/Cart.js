import React, { createContext, useEffect, useReducer } from "react";
import "./cart.css";
import ContextCard from "./ContextCard";
import { products } from "./products";
import { reducer } from "./reducer";

export const CardContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete the indivisual elements from an item cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  // clear the cart
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };
  // increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({
      type: "GET_TOTAL",
    });
  }, [state.item]);
  return (
    <>
      <CardContext.Provider
        value={{ ...state, removeItem, clearCart, increment, decrement }}
      >
        <ContextCard />
      </CardContext.Provider>
    </>
  );
};

export default Cart;
