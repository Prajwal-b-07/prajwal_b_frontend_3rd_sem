import React from "react";

import { Link } from "react-router-dom";


function Navbar() {

    return (

        <nav className="navbar">

            <a href="/" className="nav-link">Welcome</a>

            <a href="/thank-you" className="nav-link">ThankYou</a>

        </nav>

    );

}


export default Navbar;