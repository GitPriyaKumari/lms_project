import { useState } from 'react'

import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Adminlogin from './pages/Adminlogin'



function App() {
  
  return (

    <>
    <Header/>
    <Routes>
      <Route path="/admin/login" element={<Adminlogin/>}>

      </Route>
    </Routes>
      
    </>
  )
}

export default App
