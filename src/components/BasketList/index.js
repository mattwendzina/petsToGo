import React from "react";

import BasketItem from "../BasketItems";

const BasketList = props => (
  <ul>
    {props.pets.map((pet, idx) => (
      <BasketItem
        key={idx}
        name={pet.name}
        quantity={pet.quantity}
        price={pet.price}
      />
    ))}
  </ul>
);

export default BasketList;
