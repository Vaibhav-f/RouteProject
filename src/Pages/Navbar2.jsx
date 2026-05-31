import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div className='flex gap-10 pr-20'>

        <Link to='/'>Home</Link>
          <Link to='/Contact'>Contact</Link>
          <Link to='/About'>About</Link>
          <Link to='/Product'>Product</Link>
        
        
        

      
    </div>
  )
}

export default Navbar2
