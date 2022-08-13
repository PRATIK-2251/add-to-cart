import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CardContext } from "./Cart";
const ContextCard = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CardContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>
          <div className="cart-icon">
            <img src="./images/cart.png" alt="" />
            <p>0</p>
          </div>
        </header>
        <section className="main-cart-section">
          <h1>shopping cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">0</span> times in
            shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="" />
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>shopping cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span>
          times in shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}rs</span>
          </h3>
          <button>Checkout</button>
          <button className="clear-cart" onClick={() => clearCart()}>
            Clear Card
          </button>
        </div>
      </section>
      <br />
      <br />
      <br />
    </>
  );
};

export default ContextCard;
