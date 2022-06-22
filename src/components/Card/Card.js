import React from "react";
import style from "./Card.module.css";
import { BsCart3 } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";

export default function Card() {
  const styleIcons = {  fontSize: "1.3em", margin:"7px" };
  return (
    <div className={style.card}>
      <div className={style.childCard}>
        <div className={style.CartTop}>

        <div className={style.ProductImage}>

        <div className={style.ProductButtons}>
            <div className={style.ALogo}>
              
              <BsCart3 style={styleIcons} /> 
            </div>
            <div className={style.BLogo}>
              
               <BsSuitHeart style={styleIcons} />
            </div>
          </div>
          <div className={style.image}>
            <img src="https://source.unsplash.com/random/200x200" alt="" />
          </div>
          
        </div>
        </div>
        <div className={style.ChildBottom}>
            <div className={style.productName}><p className={style.Apara}>Casual Regular Sleeves Solid Women Green Top</p></div>
            <div className={style.MainPrise}><p className={style.Bpara}>₹ 10305</p></div>
            <div className={style.DiscountPrise}><p className={style.Cpara}>₹ 1005</p></div>
        </div>
      </div>
    </div>
  );
}
