import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { isAuthorized, login, logout } = useContext(AuthContext);

  const {isLight, toggleTheme} = useContext(ThemeContext);

 

  return (
    <div className="flexIt">
      <div className="imgDiv">
        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/05/Target_Corporation_logo_vector.svg.png?auto=format&q=60&fit=max&w=930" alt="" />
      </div>
       <div>
        <h2>
          {isAuthorized
            ? "Hey!, great to see you back. You're Logged in"
            : "You're logged out, we are missing you! Please Login"}
        </h2>
      </div>
      <div>
        <button className="loginbbtn"
          onClick={() => {
            if (isAuthorized) logout();
            else login("S", "B");
          }}
        >
          {isAuthorized ? "Logout" : "Login"}
        </button>
      </div>

      <div  className="themebtn" style={{"display": "flex", "fontWeight" : 'bold', "color":"white"}}>
        <h3>Change theme</h3>
        <button onClick={(toggleTheme)}>{isLight ? (<div className="themeicon"><img src="https://cdn-icons-png.flaticon.com/512/230/230994.png" alt="Dark" /></div>):(<div className="themeicon"><img src="https://cdn-icons-png.flaticon.com/512/1160/1160707.png" alt="Light" /></div>)}</button>
      </div>
    </div>
  );
};

export default Navbar;
