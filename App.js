import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import ReactDOM  from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
import UserContext from "./src/utils/UserContext";
// import Grocery from "./src/components/Grocery";

// this dynamic import or lazy loading for app optimization we splitted the code into chunks.
const Grocery = lazy(() => import("./src/components/Grocery"));
const About = lazy(() => import("./src/components/About"));


const AppLayout = () => {

  const[userName, setUserName] = useState()

  useEffect(() => {
    const data = {
      name : "Sunil Yadav",
    }
    setUserName(data.name)
  }, []) 

  return (

    //Default Value
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      {/* Sunil Yadav */}
    <div className="app">
    {/* <UserContext.Provider value={{loggedInUser: "Ayush Yadav"}}> */}
      {/* Ayush yadav */}
      <Header />
      {/* </UserContext.Provider> */}
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback = {<Shimmer />}><About /></Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback = {<Shimmer />}><Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },

    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {appRouter} />);
