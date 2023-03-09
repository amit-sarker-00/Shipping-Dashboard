import React from "react";
import Date from "../Date/Date";
import History from "../History/History";
import RecentOrders from "../RecentOrders/RecentOrders";

const Home = () => {
  return (
    <div>
      <Date></Date>
      <History></History>
      <RecentOrders></RecentOrders>
    </div>
  );
};

export default Home;
