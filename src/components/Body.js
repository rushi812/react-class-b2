import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import ProductCard, { withAvailabilityStatus } from "./ProductCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useProducts from "../utils/useProducts";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);
  const {
    listOfProducts,
    filteredListOfProducts,
    setListOfProducts,
    setFilteredListOfProducts,
  } = useProducts();

  const onlineStatus = useOnlineStatus();

  const ProductCardWithStatus = withAvailabilityStatus(ProductCard);

  const handleRatings = () => {
    const filteredData = listOfProducts.filter((item) => item.rating > 3.5);
    setListOfProducts(filteredData);
  };

  const handleSearch = () => {
    const filteredList = listOfProducts.filter((item) => {
      const titleLower = item.title.toLowerCase();
      const searchLower = searchText.toLowerCase();

      return titleLower.includes(searchLower);
    });
    setFilteredListOfProducts(filteredList);
  };

  if (onlineStatus === false) {
    return <h1>Looks like you're network conectivity is offline!</h1>;
  }

  return listOfProducts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      <div className="flex">
        <div>
          <input
            className="border-[1px] border-black border-solid px-2 py-1 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={handleSearch}
            className="bg-orange-400 px-2 py-1 rounded-md ml-2"
          >
            Search
          </button>
        </div>
        <button
          onClick={handleRatings}
          className="bg-gray-300 px-2 py-1 rounded-md mx-4"
        >
          Rating 3.5+
        </button>
        <div>
          <input
            placeholder="Enter Something.."
            className="border-[1px] border-black border-solid px-2 py-1 rounded-md"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-5">
        {filteredListOfProducts.map((dataObj) => {
          return (
            <Link to={`/product/${dataObj.id}`} key={dataObj.id}>
              {dataObj.availabilityStatus === "Low Stock" ? (
                <ProductCardWithStatus productData={dataObj} />
              ) : (
                <ProductCard productData={dataObj} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
