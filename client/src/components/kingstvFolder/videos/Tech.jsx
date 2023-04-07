import React from 'react'
import { Navigation } from '../../Navigation'
import Footer from '../../Footer'
import Reusable from '../Reusable'
import { categories } from '../../routes/routings'
import { NavLink } from 'react-router-dom'

function Tech() {
  return (
    <div>
               <div className="Homeholder service">
      <Navigation></Navigation>
      Agriculture
      </div>
      <div className="flex justify-between items-center min-h-20 px-4 pt-2">
        <h1 className=" kingshome_title font-bold text-3xl   ">kings tv</h1>
        <div class="dropdown">
          <button class="dropbtn shadow-xl">More categories on Kings tv</button>
          <div class="dropdown-content">
            {categories.map((value, i) => (
              <NavLink               className={({ isActive }) => (isActive ? "active" : "dormant")} to={value.path} key={i}>
                {value.pathName}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="secondHomecontainer kingstv">
      <Reusable video={'agmfULyUFjY'}></Reusable>
        <Reusable video={'4lzyzzXvCOk'}></Reusable>
        <Reusable video={'tH29OK0SVFk'}></Reusable>
        <Reusable video={'2v_K_oLFCyA'}></Reusable>
        <Reusable video={'gHWjHBNUedM'}></Reusable>
      </div>
     
       
        </div>
  )
}

export default Tech