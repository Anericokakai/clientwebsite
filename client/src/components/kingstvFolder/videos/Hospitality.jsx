import React from 'react'
import { Navigation } from '../../Navigation'
 import Kingstvhome from '../Kingstvhome'
 import './videocategories.css'
import Reusable from '../Reusable'
import { categories } from '../../routes/routings'
import { NavLink } from 'react-router-dom'
function Hospitality() {
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
            <Reusable video={'2XANbYHov4g'}></Reusable>
            <Reusable video={'vLrLEYE6-dH'}></Reusable>
            <Reusable video={'NFyj-d2fHgQ'}></Reusable>
            <Reusable video={'GrJ66lkVGzE'}></Reusable>
            <Reusable video={'1KniQUXTWM'}></Reusable>
          
            
         </div>

        </div>
  )
}

export default Hospitality