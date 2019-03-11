import React from "react";
import ListItem from "../CarouselListItem";
import CSS from "./CarouselUl.module.css";

const CarouselList = props => (
  <ul className={CSS.ul}>
    {props.pets.map((item, idx) => (
      <ListItem
        key={idx}
        name={item.name}
        description={item.description}
        price={item.price}
        onAdd={() => props.addToBasket(idx)}
      />
    ))}
  </ul>
);

export default CarouselList;
