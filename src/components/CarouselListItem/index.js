import React from "react";
import CSS from "./CarouselListItem.module.css";

// List item needs to have a name, a description and a price
// These properties will be passed from from UnorderedList component

// button with function which adds object to basket array ...

const ListItem = props => (
  <li className={CSS.li}>
    <h3> {props.name} </h3>
    <p> {props.description} </p>
    <p> £{props.price.toFixed(2)} </p>
    <button onClick={props.onAdd}>Order</button>
  </li>
);

export default ListItem;
