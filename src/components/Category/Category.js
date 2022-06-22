import React from 'react'
import style from './Category.module.css'

export default function Category() {
  return (
    <div className={style.category}>
        <div className={style.childCategory}>
            

            <p className={style.topText}>Category</p>
            <p className={style.bottomText}>MENS | Category</p>
            
        </div>
    </div>
  )
}
