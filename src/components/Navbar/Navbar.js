import React from "react";
import style from "./Navbar.module.css";
import {FcSearch} from  "react-icons/fc";
import {RiAdminFill} from "react-icons/ri";
import {FaCartArrowDown} from "react-icons/fa";

export default function Navbar() {
  const styleIcons = { color: "black", fontSize: "1.5em" }
  const styleIconsSearch = { fontSize: "6 em" }
  return (
    <div className={style.navbar}>
      <div className={style.childNavbar}>
        <div className={style.logo}>National Shopping</div>
        <div className={style.navMenu}>
          <div className={style.menuItem}><a href="#" id={style.menuItemAnchor}>Home</a> </div>
          <div className={style.menuItem}><a href="#" id={style.menuItemAnchor}>Mens</a></div>
          <div className={style.menuItem}><a href="#" id={style.menuItemAnchor}>Womens</a></div>
          <div className={style.menuItem}><a href="#" id={style.menuItemAnchor}>Baby Collection</a></div>
        </div>
        <div className={style.search}>
          <input className={style.navSearch} type="text" placeholder="Search National.in" />
          <button className={style.navButton}><FcSearch style={styleIconsSearch}/></button>
        </div>
        <div className={style.socialLogo}>
          <div className={style.socialLogoChild}><a href="#"><RiAdminFill style={styleIcons}/></a></div>
          <div className={style.socialLogoChild}><a href="#"><FaCartArrowDown  style={styleIcons}/></a></div>
        </div>
      </div>
    </div>
  );
}
