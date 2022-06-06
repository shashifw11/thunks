import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Components/Navbar'
import { Home } from './Home'
import { Posts } from './Posts'

export const AllRoutes = () => {
  return (
    <div>
       <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={ <Posts /> } />
      </Routes>
  
    </div>
  )
}