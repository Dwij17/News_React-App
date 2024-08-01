import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Header from './Common/Header'
import Footer from './Common/Footer'
import * as rb from 'react-router-dom'

function Base() {
  return(
    <>
      <Header/>
      <rb.Outlet/>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <>
      <rb.BrowserRouter>
        <rb.Routes>
          <rb.Route element={<Base/>} path='/'>
            <rb.Route path='' element={<Home/>}/>
            <rb.Route path='/about' element={<About/>}/>
            <rb.Route path='/contact' element={<Contact/>}/>
            <rb.Route path='/services' element={<Services/>}/>
          </rb.Route>
        </rb.Routes>
      </rb.BrowserRouter>
    </>
  )
}

export default App