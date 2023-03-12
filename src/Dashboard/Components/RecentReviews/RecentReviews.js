import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecentReviews = () => {
  const [storeReviews, setStoreReviews] = useState([]);
  useEffect(() => {
    fetch("fakerating.json")
      .then((res) => res.json())
      .then((data) => setStoreReviews(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <h1 className="mb-1">Recent Reviews</h1>
        <div className="">
          {storeReviews?.slice(-5).map((reviews) => (
            <Link
              key={reviews?._id}
              className="flex items-center gap-4 justify-between border"
            >
              <div className="flex items-center gap-4">
                <div>
                  <img className="w-16 h-12" src={reviews?.picture} alt="" />
                </div>
                <div className="text-gray-600">
                  <p className="text-[18px]">{reviews?.productName}</p>
                  <p className="text-sm">Review by {reviews?.reviewerName}</p>
                </div>
              </div>
              <div>
                <div className="text-sm mr-3">
                  {reviews?.rating === 5.0 ? (
                    <p className="flex items-center text-yellow-400">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </p>
                  ) : reviews?.rating === 4.5 ? (
                    <p className="flex items-center text-yellow-400">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStarHalfAlt></FaStarHalfAlt>
                    </p>
                  ) : reviews?.rating === 4.0 ? (
                    <p className="flex items-center text-yellow-400">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </p>
                  ) : reviews?.rating === 3.5 ? (
                    <p className="flex items-center text-yellow-400">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStarHalfAlt></FaStarHalfAlt>
                    </p>
                  ) : reviews?.rating === 3.0 ? (
                    <p className="flex items-center text-yellow-400">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </p>
                  ) : (
                    <p className="flex items-center text-yellow-400">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h1>Right Section</h1>
      </div>
    </div>
  );
};

export default RecentReviews;
