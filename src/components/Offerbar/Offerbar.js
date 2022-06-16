import React from "react";
import style from "./Offerbar.module.css";

export default function Offerbar() {
  return (
    <div className={style.offerbar}>
      <div className={style.offerbarChild}>
        <div className={style.text}>
          Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer
        </div>
        <div className={style.clickhere}>Shop Now</div>
      </div>
    </div>
  );
}
