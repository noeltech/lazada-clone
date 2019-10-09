import { useState, useEffect } from "react";

const getOnSaleProducts = () => {
  const [onSaleProducts, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://api.myjson.com/bins/1242vd")
      .then(res => res.json())
      // Set the state with the data fetch and limit by 6 items
      .then(data => setProduct(data.products.slice(0, 6)))
      // Handle errors
      .catch(error => console.log("error fetching data", error));

    return () => {};
  }, []);

  // log the current state/data fetch
  console.log(onSaleProducts);

  return onSaleProducts;
};

export default getOnSaleProducts;
