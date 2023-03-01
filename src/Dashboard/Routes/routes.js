import { createBrowserRouter } from "react-router-dom";
import AllReportedItem from "../Components/AllReportedItem/AllReportedItem";
import AllSeller from "../Components/AllSeller/AllSeller";
import Home from "../Components/Home/Home";
import Main from "../Main/layout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home /> },
      { path: "/allSeller", element: <AllSeller /> },
      { path: "/allReportedItem", element: <AllReportedItem /> },
    ],
  },
]);
