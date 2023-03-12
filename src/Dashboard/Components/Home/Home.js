import React from "react";
import Date from "../Date/Date";
import History from "../History/History";
import RecentOrders from "../RecentOrders/RecentOrders";
import RecentReviews from "../RecentReviews/RecentReviews";

const Home = () => {
  return (
    <div>
      <Date></Date>
      <History></History>
      <RecentOrders></RecentOrders>
      <RecentReviews></RecentReviews>
    </div>
  );
};

export default Home;
