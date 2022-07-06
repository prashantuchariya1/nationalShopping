import React from 'react'
import style from './CheckOut.module.css'
export default function CheckOut() {
  return (
    <div className={style.parent}>
      <div className={style.content}>
        <div className={style.uppertext}>
          <div className={style.total}>Total</div>
          <div className={style.amount}>357469</div>
        </div>
        <div className={style.hr}></div>
        <div className={style.lowerText}>Shipping Address</div>
        <input type="text" className={style.inputTextxxx}/>
        <button className={style.button}>Proceed To Buy</button>
      </div>
    </div>
  )
}
