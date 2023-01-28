import React from "react";
import { Link } from "react-router-dom";
import "../component/navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
     
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ width: "50%" }}>
          <ul className="lists">
            <li className="list">
              <img
                src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png"
                alt=""
              />
            </li>
            <li className="list">
              <Link className="link" to="">
                Home
              </Link>
            </li>
            <li className="list">
              <Link className="link" to="add">
                Add
              </Link>
            </li>
            <li className="list">
              <Link className="link" to="about">
                About
              </Link>
            </li>
            <li className="list">
              <Link className="link" to="blog">
                Blog
              </Link>
            </li>
            <li className="list">
              <Link className="link" to="case">
                Case
              </Link>
            </li>
            <li className="list">
              <Link className="link" to="contact">
                Contact
              </Link>
            </li>
            <li className="list">
              <Link className="link" to="service">
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div
          style={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
        >
          <div className="navbar-right">
            <div className="button">
              <button>Free Quote</button>
            </div>
            <div>
              <div className="navbar_icon">
                <i class="fa-solid fa-headphones"></i>
                <div>
                  <span>HAVE ANY QUESTION</span>
                  <p>Call:10(78) 27374788</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
