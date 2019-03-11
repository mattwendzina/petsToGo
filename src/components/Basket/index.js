import React from "react";

import css from "./Basket.module.css";

import BasketList from "../BasketList";

const Basket = props => (
  <div className={css.basket}>
    <h1>Basket</h1>
    <BasketList
      basket={props.basket}
      onPlus={props.onPlus}
      onMinus={props.onMinus}
    />
    {/* Total component */}
  </div>
);

export default Basket;
