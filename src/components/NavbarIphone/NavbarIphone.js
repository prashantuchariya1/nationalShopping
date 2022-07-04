import React,{useState} from 'react'
import style from './NavbarIphone.module.css'
import {RiAdminLine} from "react-icons/ri";
import {BsCart3} from "react-icons/bs";
import {IoSearch} from "react-icons/io5";
import classNames from 'classnames';

export default function NavbarIphone() {
    const styleIcons = { color: "#737373", fontSize: "1.2em" }
    const searchIcon = { color: "#737373", fontSize: "1.2em" }
    const [show, setShow] = useState(false)
    
  return (
    <div className={style.siteNavbar}>
        <div className={style.container}>
            <div className={style.hamburger}  onClick={()=>setShow(prev => !prev)}>
                <div className={style.bar1} style={{transform:show? "rotate(-45deg) translate(-8px, 3px)": "none" }}></div>
                <div className={style.bar2} style={{opacity: show? "0":"1"}}></div>
                <div className={style.bar3} style={{transform:show? "rotate(45deg) translate(-8px, -3px)": "none" }}></div>
            </div>
            <div className={style.icon}><p>National Shopping</p> </div>
            <div className={style.SocialmediaIcon}>
            <div className={style.socialLogoChild}><a href="#"><RiAdminLine style={styleIcons}/></a></div>
          <div className={style.socialLogoChild}><a href="#"><BsCart3  style={styleIcons}/></a></div>
            </div>



        </div>
            <div className={style.iphoneMenu} style={{display:show?"block":"none"}}>
                <div className={style.iphoneMenuContainer}>
                <div className={style.search}>
                    <div className={style.searchIcon}><IoSearch style={searchIcon}/></div>
          <input className={style.navSearch} type="text" placeholder="Search National.in" />
          
        </div>
                <div className={style.iphoneMenuItemContainer}></div>
          <div className={style.iphoneMenuItem}><a href="#" className={style.iphoneMenuItemAnchor}>Home</a> </div>
          <div className={style.iphoneMenuItem}><a href="#" className={style.iphoneMenuItemAnchor}>Mens</a></div>
          <div className={style.iphoneMenuItem}><a href="#" className={style.iphoneMenuItemAnchor}>Womens</a></div>
          <div className={style.iphoneMenuItem}><a href="#" className={style.iphoneMenuItemAnchor}>Baby Collection</a></div>
        
                </div>
            </div>
        


    </div>
  )
}
