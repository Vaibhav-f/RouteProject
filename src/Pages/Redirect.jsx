import React from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect = () => {

   const nevigate = useNavigate()
  return (

    <div className=' flex  gap-10  px-10 py-5' >

  <button
  onClick={()=>{
    nevigate('/')
  }}
   className='rounded bg-amber-500 text-2xl text-white p-2 h-13 font-bold  cursor-pointer active:scale-95' >
    Back To Home Page
  </button>

  <button  onClick={()=>{
    nevigate(-1)
  }}
   className='rounded  bg-amber-500 text-2xl text-white p-2 h-13  font-bold cursor-pointer active:scale-95'>
    Back
  </button>

  <button onClick={()=>{
    nevigate(+1)
  }}
  className='rounded bg-amber-500 text-2xl text-white p-2 h-13 font-bold cursor-pointer active:scale-95'>
    Next
  </button>

      
    </div>
  )
}

export default Redirect
