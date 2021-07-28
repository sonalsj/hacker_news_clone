import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <>
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div className="container-fluid">
         <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
       

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav navbar-left">
           
            <li className="nav-item m-2">
              <NavLink className="nav-link" exact to="/topstories">
                Top Stories
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink className="nav-link" to="/beststories">
                Best Stories
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink className="nav-link" to="/newstories">
                New Stories
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="navbar-brand" exact to="/">
          H@CKER NEW$
        </NavLink>
      </div>
      
    </nav>
  </>
);

export default Header;
