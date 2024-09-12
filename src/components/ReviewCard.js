import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const ReviewCard = ({ review, showDetails, handleClick }) => {
  const { dummy } = useContext(UserContext);

  return (
    <div className="bg-gray-200 p-3 rounded-md shadow-md mb-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleClick}
      >
        <div>
          <span className="font-bold text-xl">{review.reviewerName}</span>
          <span className="ml-2 text-gray-400 text-sm">{review.date}</span>
        </div>
        <span>{showDetails ? "⬇️" : "⬆️"}</span>
      </div>
      {showDetails && (
        <div className="mt-4">
          <p>{review.comment}</p>
          <p>★ {review.rating}</p>
          <p>{dummy}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
