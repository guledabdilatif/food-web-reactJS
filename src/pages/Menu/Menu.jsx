import React from 'react'
import { MenuItem } from '../../MenuItem'
import './manu.css'

const Menu = () => {
  return (
 <div className='menu'>
  <div className='Menu-list' >
  {MenuItem.map((item)=>{
    return(
      <div className='menulist'>
        <div className="menu-card">
          <img src={item.image} alt="" />
         <div className='menu-content'>
         <p>{item.name}</p>
         <p>{item.price}</p>
         </div>
        </div>
      </div>
    )
  })}
  </div>
 </div>

  )
}

export default Menu