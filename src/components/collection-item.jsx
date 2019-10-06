import React, { useContext } from "react";
import Button from "components/button";
import { CartContext } from "provider/cart.provider";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button inverted onClick={() => addItem(item)}>
        Add to Cart
      </Button>
    </div>
  );
};

export default CollectionItem;
