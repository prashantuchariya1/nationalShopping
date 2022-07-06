import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from './Pages/Cart/CartPage'
import Home from './Pages/Home/Home'


export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                   


                </Routes>
            </BrowserRouter>
        </>
    )
}
