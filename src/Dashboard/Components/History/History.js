import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
const History = () => {
  const history = [
    {
      _id: 1,
      name: "Total Sells",
      amount: "$50000.05",
      increase: 25.3,
      decrease: "",
    },
    {
      _id: 2,
      name: "Average order value",
      amount: "$300.0",
      increase: 32.3,
      decrease: "",
    },
    {
      _id: 3,
      name: "Total orders",
      amount: 720.16,

      increase: 4.3,
      decrease: "",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {history?.map((data) => (
        <div key={data?._id}>
          <div className="border shadow border-gray-200 p-4">
            <p className="text-sm text-gray-500">{data?.name}</p>
            <div className="font-bold text-center">
              <h1 className="text-3xl">{data?.amount}</h1>
              <div className="flex items-center justify-center text-sm mt-2">
                <p>
                  <BsArrowUpRight className="h-4 text-green-400"></BsArrowUpRight>
                </p>
                <h5 className="text-green-400">{data?.increase} %</h5>
              </div>
              <p>
                <small className="text-gray-500 text-xs">
                  Compared to April 2022
                </small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
