import React, { useContext } from "react";
import CollectionPreview from "components/collection-preview";
import CollectionsContext from "context/collections/collections.context";

const CollectionsOverview = () => {
  const collections = useContext(CollectionsContext);
  const collectionList = Object.keys(collections).map(key => collections[key]);

  return (
    <div className="collection-overview">
      {collectionList.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
