import React from "react";
import ListItem from "../CarouselListItem";

const CarouselList = props => (
  <ul>
    {props.pets.map((item, idx) => (
      <ListItem
        key={idx}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    ))}
  </ul>
);

export default CarouselList;
