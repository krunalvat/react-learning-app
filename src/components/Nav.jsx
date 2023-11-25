import React from "react";
import {  NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
        <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse menu-list navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/challenge-one">Challenge One</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/challenge-two">Challenge Two</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/challenge-three">Challenge Three</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/image-gallery">Image Gallery</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/use-state">useState</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/todo-list">ToDo List</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/todo-list-toggle">Show Data Based On Toggle</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/props">Props</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/user-props">User Props</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/form">Form</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/form-two">Form Two</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/form-three">Form Three</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact className="nav-link" to="/name">Name</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/user-context">UseContext</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/user-params/test/1">UseParams</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink exact  className="nav-link" to="/search">Search</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      );
}
export default Nav;