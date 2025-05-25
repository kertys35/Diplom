import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Row } from "react-bootstrap";
import ItemCard from "./itemCard";

const ItemList = observer(() => {
    const {item} = useContext(Context)
  return (
    <Row className = "d-flex">
      {item.items.map(item=>
        <ItemCard key = {item.itemId} item={item}></ItemCard> //Вывод списка всех товаров
      )}
    </Row>
  );
})

export default ItemList;