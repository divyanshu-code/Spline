import React from 'react'
import Navbar from '../Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import ContactUs from '../Components/ContactUs'
import Version from '../Components/Version'
import Scrollbar from '../Components/Scrollbar'
import Help from '../Components/Help'
import Overview from '../Components/Overview'
import Installation from '../Components/Installation'
import Upgrade from '../Components/Upgrade'


const App = () => {
  return (
   
      <>
        <div className='hii'>

        <Navbar />

        <Scrollbar />
         
        <Routes>
           
           <Route path='/' element={<Home />} />
           <Route path='/about' element ={<About />} />
           <Route path='/contact' element = {<ContactUs />} />
           <Route path='/version' element={<Version />} />
           <Route path='/help' element={<Help />} />
           <Route path='/docs' element={<Overview/> } />
           <Route path='/installation' element={<Installation/>} />
           <Route path='/upgrade' element={<Upgrade/>} />

        </Routes>
        </div>
      </>
  )
}

export default App