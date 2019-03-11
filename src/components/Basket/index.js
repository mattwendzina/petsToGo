import React from "react";

import BasketList from "../BasketList";

const Basket = props => (
  <div>
    <h1>Basket</h1>
    <BasketList pets={props.pets} />
    // Total component
  </div>
);

export default Basket;
