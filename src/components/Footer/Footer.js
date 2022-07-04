import React from "react";
import style from "./Footer.module.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookBoxFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
    const styleIcons = { color: "rgb(202,213,207)", fontSize: "1.5em" }
  return (
    <div className={style.footer}>
      <div className={style.childFooter}>
        <div className={style.footerTop}>
          <div className={style.topBoxSubscribe}>
            <div className={style.topBoxSubscribeTop}>Subscribe Newsletter</div>
            <div className={style.topBoxSubscribeBottom}>
              Subscribe newsletter to get 5% on all products
            </div>
          </div>
          <div className={style.topBoxEmailForm}>
            <input className={style.emailInput} type="text" placeholder="Enter your email" />
            <button className={style.footerButton}>Subscribe</button>
          </div>
          <div className={style.topBoxSocialmedia}>
            <AiOutlineInstagram style={styleIcons}/>
            <RiFacebookBoxFill style={styleIcons}/>
            <BsTwitter style={styleIcons}/>
          </div>
        </div>
        <hr />
        <div className={style.footerMid}>
          <div className={style.QuickLinks}>
            <ul>
              <li className={style.liFirstElement}>Shop Women</li>
              <li>Clothing Fashion</li>
              <li>Winter</li>
              <li>Summer</li>
              <li>Formal</li>
              <li>Casual</li>
            </ul>
          </div>
          <div className={style.QuickLinks}>
            <ul>
              <li className={style.liFirstElement}>Baby Collection</li>
              <li>Clothing Fashion</li>
              <li>Winter</li>
              <li>Summer</li>
              <li>Formal</li>
              <li>Casual</li>
            </ul>
          </div>
          <div className={style.break}></div>
         
          <div className={style.QuickLinks}>
            <ul>
              <li className={style.liFirstElement}>Shop Men </li>
              <li>Clothing Fashion</li>
              <li>Winter</li>
              <li>Summer</li>
              <li>Formal</li>
              <li>Casual</li>
            </ul>
          </div>
          <div className={style.QuickLinks}>
            <ul>
              <li className={style.liFirstElement}>Quick Links</li>
              <li>Track Your Order</li>
              <li>Support</li>
              <li>FAQ</li>
              <li>Carrier</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={style.footerBottom}>
          <div className={style.copyright}>
            Copyright ©2022 All rights reserved | This template is made with @
            Ekart
          </div>
        </div>
      </div>
    </div>
  );
}
