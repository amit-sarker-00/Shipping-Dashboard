import React, { useEffect, useState } from "react";

const RecentOrders = () => {
  const [recentOrders, setRecentOrders] = useState([]);
  useEffect(() => {
    fetch("faketable.json")
      .then((res) => res.json())
      .then((data) => setRecentOrders(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="container  my-6  text-gray-100">
      <h1 className="font-semibold text-[#5e6164]">Recent Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-28" />
          </colgroup>
          <thead className="bg-gray-400">
            <tr className="text-left">
              <th className="p-3">No.</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Location</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-right">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders?.map((orders) => (
              <tr
                key={orders?._id}
                className="border-b border-opacity-20 border-gray-700  text-[#5e6164]"
              >
                <td className="p-3">
                  <p># {orders?._id}</p>
                </td>
                <td className="p-3">
                  <p>{orders?.customerName}</p>
                </td>
                <td className="p-3">
                  <p>{orders?.location}</p>
                </td>
                <td className="p-3">
                  <p>{orders?.date}</p>
                </td>

                <td className="p-3 text-right">
                  <p>{orders?.amount} BDT</p>
                </td>
                <td className="p-3  text-right">
                  <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 dark:text-gray-900">
                    <span>{orders?.status}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
