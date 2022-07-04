import React, { useState } from "react";
import style from "./Navbar.module.css";
import {FcSearch} from  "react-icons/fc";
import {RiAdminLine} from "react-icons/ri";
import {BsCart3} from "react-icons/bs";

export default function Navbar() {
  const styleIcons = { color: "black", fontSize: "1.2em" }
  const styleIconsSearch = { fontSize: "6 em" }
  
  return (
    <div className={style.navbar}>
      <div className={style.childNavbar}>
        <div className={style.logo}>National Shopping</div>
        <div className={style.navMenu}>
          <div className={style.menuItem}><a href="#" className={style.menuItemAnchor}>Home1</a> </div>
          <div className={style.menuItem}><a href="#" className={style.menuItemAnchor}>Mens</a></div>
          <div className={style.menuItem}><a href="#" className={style.menuItemAnchor}>Womens</a></div>
          <div className={style.menuItem}><a href="#" className={style.menuItemAnchor}>Baby Collection</a></div>
        </div>
        <div className={style.search}>
          <input className={style.navSearch} type="text" placeholder="Search National.in" />
          <button className={style.navButton}><FcSearch style={styleIconsSearch}/></button>
        </div>
        <div className={style.socialLogo}>
          <div className={style.socialLogoChild}><a href="#"><RiAdminLine style={styleIcons}/></a></div>
          <div className={style.socialLogoChild}><a href="#"><BsCart3  style={styleIcons}/></a></div>
        </div>
      </div>
    </div>
  );
}
