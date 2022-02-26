import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { NavbarApi } from "../../../assets/api/NavbarApi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiX } from "react-icons/bi";

const Navbar = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "220px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <div className="LeftPanel">
      <div id="mySidenav" className="sideNav mb-4">
        <div className="container-fluid pl-4">
          <div className="row d-flex align-items-center mt-2">
            <div className="col-8 d-flex justify-content-start">
              <img src="/images/Logo.png" alt="Loading..." />
            </div>
            <div className="col-4 d-flex justify-content-end">
              <p className="closeBtn" onClick={closeNav}>
                <BiX className="close_icon" />
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-start">
              <ul className="mt-4">
                {NavbarApi.map((nav) => {
                  return (
                    <li key={nav.id}>
                      <NavLink
                        exact="true"
                        to={nav.to}
                        onClick={closeNav}
                        activeClassName="active"
                        className="noActive"
                      >
                        {nav.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid navbar_component">
        <div className="row">
          <div className="col-12 m-0 p-0">
            <nav className="navbar navbar-light">
              <div>
                <CgMenuLeftAlt className="navbar-icon" onClick={openNav} />
              </div>

              <NavLink to="/" className="navbar-brand">
                <img src="/images/Logo.png" alt="Loading..." />
                <h1 className="ml-2">Hypothese.io</h1>
              </NavLink>

              <ul className="left_ui_block mr-auto d-flex justify-content-center align-items-center flex-row">
                {NavbarApi.map((list) => {
                  return (
                    <li className="nav_list" key={list.id}>
                      <NavLink
                        exact="true"
                        to={list.to}
                        activeClassName="active"
                        className="noActive"
                      >
                        {list.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>

              <ul className="right_ui_block ml-auto d-flex justify-content-center align-items-center flex-row">
                <li className="right_nav_list">
                  <div className="search">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search"
                      autoComplete="off"
                    />
                    <img src="/images/search.png" alt="Loading..." />
                  </div>
                </li>
                <li className="right_nav_list">
                  <div className="notification">
                    <img src="/images/notify.png" alt="Loading..." />
                    <span></span>
                  </div>
                </li>
                <li className="right_nav_list">
                  <div className="btn-group">
                    <button
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      className="dropdown_btn"
                    >
                      <span className="mt-1">Noel</span>
                      <img src="/images/profile.png" alt="Loading..." />
                      <MdKeyboardArrowDown className="icon ml-1" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button">
                        Menu1
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-12  d-flex align-items-center">
            <div className="mobile_input_search">
              <div className="input_section">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  autoComplete="off"
                />
                <img src="/images/search.png" alt="Loading..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
