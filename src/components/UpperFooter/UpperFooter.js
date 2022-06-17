import React from "react";
import style from "./UpperFooter.module.css";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserLock } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";

export default function UpperFooter() {
  const styleIcons = { color: "black", fontSize: "2.5em" };
  return (
    <div className={style.UpperFooter}>
      <div className={style.childUpperFooter}>
        <div className={style.feature}>
          <div className={style.featureLogo}>
            <TbTruckDelivery style={styleIcons} />
          </div>

          <div className={style.upperText}>Fast & Free Delivery</div>
          <div className={style.lowerText}>Free Delivery on all Orders</div>
        </div>

        <div className={style.feature}>
          <div className={style.featureLogo}>
            <FaUserLock style={styleIcons} />
          </div>

          <div className={style.upperText}>Secure Payment</div>
          <div className={style.lowerText}>Free Delivery on all Orders</div>
        </div>

        <div className={style.feature}>
          <div className={style.featureLogo}>
            <FaMoneyCheckAlt style={styleIcons} />
          </div>

          <div className={style.upperText}>Money Back Gurantee</div>
          <div className={style.lowerText}>Free Delivery on all Orders</div>
        </div>
        <div className={style.feature}>
          <div className={style.featureLogo}>
            <FaClock style={styleIcons} />
          </div>

          <div className={style.upperText}>Online Support</div>
          <div className={style.lowerText}>Free Delivery on all Orders</div>
        </div>
      </div>
    </div>
  );
}
