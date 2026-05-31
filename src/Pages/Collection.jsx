import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Collection = () => {
  return (
    <div className='flex gap-10 py-5 px-[45%] text-2xl font-bold'>

       <Link to='/Product/Men'>Men</Link>
      <Link to='/Product/Women'>Women</Link>
        <Outlet/>
    </div>
  
  )
}

export default Collection
