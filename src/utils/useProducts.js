import { useState, useEffect } from "react";

const useProducts = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [filteredListOfProducts, setFilteredListOfProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setListOfProducts(data.products);
    setFilteredListOfProducts(data.products);
  };

  return {
    listOfProducts,
    filteredListOfProducts,
    setListOfProducts,
    setFilteredListOfProducts,
  };
};

export default useProducts;
