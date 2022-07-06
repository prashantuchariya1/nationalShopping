import React from 'react'
import CartCard from 'components/CartCard/CartCard.js'
import style from './CartCardContainer.module.css'
export default function CartCardContainer() {
  return (
    <div className={style.allCarts}>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
      
    </div>
  )
}
