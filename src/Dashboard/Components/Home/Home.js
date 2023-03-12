import React from "react";
import ActiveUserAndChart from "../ActiveUserAndChart/ActiveUserAndChart";
import Date from "../Date/Date";
import History from "../History/History";
import RecentOrders from "../RecentOrders/RecentOrders";
import RecentReviews from "../RecentReviews/RecentReviews";

const Home = () => {
  return (
    <div>
      <Date></Date>
      <History></History>
      <ActiveUserAndChart />
      <RecentOrders></RecentOrders>
      <RecentReviews></RecentReviews>
    </div>
  );
};

export default Home;
