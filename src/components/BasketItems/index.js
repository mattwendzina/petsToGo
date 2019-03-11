import React from "react";

const BasketItem = props => (
  <li className="listItemBasket">
    {props.name}
    <button onClick={props.onPlus}>+</button>
    {props.quantity}
    <button onClick={props.onMinus}>-</button>
    {props.price * props.quantity}
  </li>
);

export default BasketItem;
