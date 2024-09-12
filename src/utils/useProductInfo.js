import { useEffect, useState } from "react";

const useProductInfo = (productId) => {
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await res.json();
    setProductInfo(data);
  };

  return productInfo;
};

export default useProductInfo;
