import React from "react";
import ReviewCard from "./ReviewCard";

const Ratings = ({ productInfo, showDetails, setShowDetails }) => {
  return (
    <div className="mt-6">
      <h1 className="font-bold text-2xl mb-3">Ratings</h1>
      {productInfo.reviews.map((review, index) => {
        return (
          <ReviewCard
            key={review.reviewerEmail}
            review={review}
            showDetails={showDetails === index}
            handleClick={() => {
              setShowDetails(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default Ratings;
