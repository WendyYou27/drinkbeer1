import { Outlet, Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// 我是測試
//123
// 456

const Layout = () => {
  return (
    <div>
      <nav className="navbar bg-warning navbar-expand-lg navbar-dark sticky-top">
        <div className="container">
          <a className="navbar navbar-brand" href="/">
            <img
              src="logolast/logo.png"
              alt="Logo"
              style={{ width: "100px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link
                  to="/"
                  className="text-white text-decoration-none nav-link"
                >
                  首頁-Drink Beer
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/Menu"
                  className="nav-link dropdown-toggle text-white text-decoration-none"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  美食清單
                </Link>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/Menu" className="dropdown-item">
                      啤酒
                    </Link>
                  </li>

                  <li>
                    <Link to="/MenuHamburger" className=" dropdown-item">
                      炸物/披薩
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="/Togo"
                  className="nav-link text-white text-decoration-none"
                >
                  外帶專區
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Cart"
                  className="nav-link text-white text-decoration-none"
                >
                  購物車
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
