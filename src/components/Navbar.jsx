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
        <button onClick={(toggleTheme)}>{isLight ? (<div className="themeicon"><img src="https://cdn-icons.flaticon.com/png/512/6048/premium/6048363.png?token=exp=1654101148~hmac=d88f59fe29e2b99f7961ddb8c07e6fc7" alt="" /></div>):(<div className="themeicon"><img src="https://cdn-icons.flaticon.com/png/512/2277/premium/2277958.png?token=exp=1654101182~hmac=d3875fa6be3f12b955da003a05488cb3" alt="" /></div>)}</button>
      </div>
    </div>
  );
};

export default Navbar;
