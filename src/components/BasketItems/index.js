import React from "react";

const BasketItem = props => (
  <li>
    {props.name}
    <button>+</button>
    {props.quantity}
    <button>-</button>
    {props.price} * {props.quantity}
  </li>
);

export default BasketItem;
