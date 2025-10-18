import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src="../Screenshot (11).png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                <a className="navbar-brand" href="">ZEXPR</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about-us">About Us</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                BRAND
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="">BMW</a></li>
              <li><a class="dropdown-item" href="">LAMBORGHINI</a></li>
              <li><a class="dropdown-item" href="">DODGE</a></li>
              <li><a class="dropdown-item" href="">TOYOTA</a></li>
              <li><a class="dropdown-item" href="">FERRARI</a></li>
              <li><a class="dropdown-item" href="">MERCEDES BENZ</a></li>
              <li><a class="dropdown-item" href="">NISSAN</a></li>
            </ul>
          </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact-us">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;