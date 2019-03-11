import React from "react";

import BasketItem from "../BasketItems";

const BasketList = props => (
  <ul>
    {props.basket.map((pet, idx) => (
      <BasketItem
        key={idx}
        name={pet.name}
        quantity={pet.quantity}
        price={pet.price}
        onPlus={() => props.onPlus(idx)}
        onMinus={() => props.onMinus(idx)}
      />
    ))}
  </ul>
);

export default BasketList;
