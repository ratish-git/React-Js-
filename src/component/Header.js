import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">!eDureka</a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">App</Link>
            </li>
            <li>
              <Link to="/post">Courses Available</Link>
            </li>
            <li>
              <Link to="/allEnquired">Enquired Details</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
