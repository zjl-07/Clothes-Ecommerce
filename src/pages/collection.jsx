import React, { useContext } from "react";
import CollectionItem from "components/collection-item";
import CollectionsContext from "context/collections/collections.context";

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <span className="title">{title}</span>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
