import React from "react";
import ActiveUserAndChart from "../ActiveUserAndChart/ActiveUserAndChart";
import Date from "../Date/Date";
import History from "../History/History";
import RecentOrders from "../RecentOrders/RecentOrders";

const Home = () => {
  return (
    <div>
      <Date></Date>
      <History></History>
      <ActiveUserAndChart />
      <RecentOrders></RecentOrders>
    </div>
  );
};

export default Home;
