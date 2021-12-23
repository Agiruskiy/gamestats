import {Link} from "react-router-dom";
import React from "react";
import "./navbar.css"
import logo from "../../static/logo.svg";

export function Navbar() {
  return(
    <nav className="Navbar">
      <img alt="logo" aria-label="logo gamepad" src={logo} className="Logo" />
      <Link to="/" className="Link">Главная</Link>
      <Link to="/about" className="Link">О Приложении</Link>
    </nav>
  )

}