import React from 'react'
import Navbar from "components/Navbar/Navbar"
import Offerbar from "components/Offerbar/Offerbar"
import NavbarIphone from 'components/NavbarIphone/NavbarIphone'
import Category from 'components/Category/Category'
import Footer from 'components/Footer/Footer'
import style from './CartPage.module.css'
import CartCardContainer from 'containers/CartCardContainer/CartCardContainer.js'
import CheckOut from 'components/CheckOut/CheckOut.js'
export default function CartPage() {
  return (
    <div>
      
        <NavbarIphone/>
        <Navbar/>
        <Offerbar/>
        <Category/>
        <div className={style.backgroundDiv}>

        <div className={style.parent}>
          <CartCardContainer/>
          <CheckOut/>

        </div>
        </div>
        <Footer/>
    </div>
  )
}