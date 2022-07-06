import React from 'react'
import style from './CartCard.module.css'

export default function CartCard() {
  return (
    
        <div className={style.CartCardContainer}>
            <div className={style.CartCardContent}>
                <div className={style.productImage}>
                <img src="https://source.unsplash.com/random/230x150" alt="" />
                </div>
                <div className={style.data}>
                    <div className={style.name}>Party  Sleeveless Solid Women Black Top</div>
                    <div className={style.prise}>3999</div>
                    <div className={style.quantity}>Size:  Qty:</div>
                    <div className={style.subtotal}>SubTotal: 129990</div>
                    <button className={style.deleteButton}>Delelte</button>
                </div>
                
            </div>







        </div>
      
    
  )
}
