import React from 'react'
import "./NavbarStyle.scss";
import { AiFillHome, AiFillShopping } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar-section'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Levi%27s_logo.svg/2560px-Levi%27s_logo.svg.png" alt="" className="navbar-section__logo" />
        <ul className="navbar-section__btns">
          <li>
            <Link to="/">
              <AiFillHome />
            </Link>
          </li>
          <li>
            <Link to="/products">
              <FaShoppingCart />
            </Link>
          </li>
          <li>
            <Link to="bag">
              <AiFillShopping />
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar;