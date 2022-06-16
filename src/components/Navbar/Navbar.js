import React from "react";
import style from "./Navbar.module.css";
import {FcSearch} from  "react-icons/fc";
import {RiAdminFill} from "react-icons/ri";
import {FaCartArrowDown} from "react-icons/fa";
export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.childNavbar}>
        <div className={style.logo}>National Shopping</div>
        <div className={style.navMenu}>
          <div className={style.menuItem}><a href="#">Home</a> </div>
          <div className={style.menuItem}><a href="#">Mens</a></div>
          <div className={style.menuItem}><a href="#">Womens</a></div>
          <div className={style.menuItem}><a href="#">Baby Collection</a></div>
        </div>
        <div className={style.search}>
          <input type="text" placeholder="Search National.in" />
          <button><FcSearch/></button>
        </div>
        <div className={style.socialLogo}>
          <div className={style.socialLogoChild}><a href="#"><RiAdminFill/></a></div>
          <div className={style.socialLogoChild}><a href="#"><FaCartArrowDown/></a></div>
        </div>
      </div>
    </div>
  );
}
