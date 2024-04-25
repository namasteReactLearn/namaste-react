import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
            alt=""
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li><button className="login-btn" onClick={ () =>{
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }
            }>
              {btnNameReact}
            </button>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;