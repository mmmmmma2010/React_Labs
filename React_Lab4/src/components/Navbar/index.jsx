import { NavLink , useHistory } from "react-router-dom";
import { useState } from 'react';


export const Navbar = () => {
  const history = useHistory();
  const [isLoggedIn ,setisloged]= useState( localStorage.getItem("token") === "12345");

 
  const handleLogout = () => {
    localStorage.removeItem("token");
    setisloged(localStorage.getItem("token") === "12345")
    history.replace("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        My-App
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts">
              Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact US
            </NavLink>
          </li>
          {isLoggedIn ?  <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              <button className="btn btn-danger" onClick={handleLogout}>
                Log-out
              </button>
            </NavLink>
          </li> : <></>}
         
        </ul>
      </div>
    </nav>
  );
};
