import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ProductCard = (props) => {
  const { title, category, price, rating, thumbnail, brand } =
    props.productData;

  const { loggedInUser, dummy } = useContext(UserContext);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-200 w-[250px] p-3 rounded-lg hover:bg-gray-300 hover:shadow-md h-full flex flex-col justify-between items-start">
      <img src={thumbnail} alt={title} />
      <div>
        <h2 className="font-bold text-lg">{title}</h2>
        <p>{brand}</p>
        <p>{category}</p>
        <p>₹ {price}</p>
        <p>★ {rating}</p>
        <p className="text-xl font-bold text-red-700">{loggedInUser}</p>
        <p>{dummy}</p>
      </div>
      <button
        className="bg-black text-white px-2 py-1 rounded-md"
        onClick={(e) => {
          e.preventDefault();
          dispatch(addItem(props.productData));
        }}
      >
        Add +
      </button>
    </div>
  );
};

// Higher Order Component => it will take component as an argumemnt and return component

// HOC => return Component => return JSX

export const withAvailabilityStatus = (ProductCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-400 px-2 text-red-800">
          Not Available
        </label>
        <ProductCard productData={props.productData} />
      </div>
    );
  };
};

export default ProductCard;
