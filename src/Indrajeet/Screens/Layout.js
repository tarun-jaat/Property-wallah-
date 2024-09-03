import React from 'react'
import Navbar from '../Components/Navbar'
import FilterSlideBar from './FilterSlideBar'
import PropertyList from './PropertyList'
import { FaQ } from 'react-icons/fa6'

function Layout() {
  return (
    <div>
        <div className='navbar'><Navbar/>
        <div className='main-layout'>
        <FilterSlideBar/>
        <PropertyList/>
        <FaQ/>
        </div>
        
        </div>
        
      
    </div>
  )
}

export default Layout
