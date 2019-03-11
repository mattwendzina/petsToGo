import React from "react";

// List item needs to have a name, a description and a price
// These properties will be passed from from UnorderedList component

const ListItem = props => (
  <li>
    <h3> {props.name} </h3>
    <p> {props.description} </p>
    <p> {props.price} </p>
  </li>
);

export default ListItem;
