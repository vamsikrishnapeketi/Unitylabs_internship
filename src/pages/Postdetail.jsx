import { useState } from "react";

export const Postdetail = () => {
  const [itemData, setItemdata] = useState();
  const [objId, setObjid] = useState();
  const api = "http://hn.algolia.com/api/v1/items/12701272";

  const fetchData = () => {
    console.log("fetch data function is called");
  };

  return <div>Postdetail</div>;
};
