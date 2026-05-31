import React from 'react'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import CourseDetail from './Pages/CourseDetail'
import { Route, Routes } from 'react-router-dom'
import Courses from './Pages/Courses'
import Error from './Pages/Error'
import Redirect from './Pages/redirect'
const App = () => {
  return (
    <div className='bg-black text-white'>
     <Navbar/>
     <Redirect/>
     <div className='h-135'>
    <Routes>
<Route  path='/course'element={<Courses/>} />
       <Route  path='/Course/:MCA'element={<CourseDetail/>} />
       <Route  path='*'element={<Error/>} />
      <Route  path='/'element={<Home/>} />
       <Route  path='/About'element={<About/>} />

       <Route  path='/Contact'element={<Contact/>} />
       <Route  path='/Product'element={<Product/>} >
       <Route   path='Men' element={<Men/>} />
       <Route   path='Women' element={<Women/>} />
       </Route>

       
    </Routes>
    
    </div>
     <Footer/>
    </div>
  )
}

export default App
