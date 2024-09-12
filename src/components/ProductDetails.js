import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useProductInfo from "../utils/useProductInfo";
import Ratings from "./Ratings";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
  const [showDetails, setShowDetails] = useState(0);
  const params = useParams();
  const productInfo = useProductInfo(params.productId);

  if (productInfo === null) return <Shimmer />;

  return (
    <div className="m-auto p-4 w-2/3">
      <ProductInfo productInfo={productInfo} />
      <Ratings
        productInfo={productInfo}
        showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
    </div>
  );
};

export default ProductDetails;
