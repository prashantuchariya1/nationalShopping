import React from 'react'
import Card from '../../components/Card/Card'
import style from './cardsContainer.module.css';

export default function cardsContainer() {
  return (
    <div className={style.container}>
      
      <div className={style.childContainer}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  )
}
