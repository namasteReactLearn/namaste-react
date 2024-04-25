import React from "react";
import ReactDOM from "react-dom";
import ReactDOM  from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";

/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * - Restaurant Container
 *  - Restaurant Card
 *  -Img
 *  -Name of res name
 * Footer
 * -copyright
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
