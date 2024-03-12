import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './font.css'


function App() {


  return (
    <>
      <div className='flex flex-col p-12 flex items-center justify-center min-h-screen'>
        <div className='flex flex-col  w-96  bg-white rounded-lg gap-2 p-6   '>
        <img className=' w-full rounded-lg bg-gray-50  object-contain' src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/chaussure-air-force-1-07-pour-HvZlfx.png" alt="" />
              
         
           
            <div className='flex flex-row justify-between pt-2'>
            <a href="" className=''>Nike Air Force 1 '07</a>
            <a href="" className=''>$115.00</a>
           </div>
           <p className='text-left text-xs text-neutral-600 py-2'>Select Size</p>
           <div className='flex flex-row flex-wrap justify-between pb-4'>
          <a className='w-16 bg-white border p-2 rounded-xl transition ease-in-out  hover:bg-black hover:text-white text-sm ' href="">40.5</a>
          <a className='w-16 bg-white border p-2 rounded-xl transition ease-in-out  hover:bg-black hover:text-white text-sm' href="">40</a>
          <a className='w-16 bg-white border p-2 rounded-xl transition ease-in-out  hover:bg-black hover:text-white text-sm' href="">41</a>
          <a className='w-16 bg-white border p-2 rounded-xl transition ease-in-out  hover:bg-black hover:text-white text-sm' href="">42</a>
          <a className='w-16 bg-white border p-2 rounded-xl transition ease-in-out  hover:bg-black hover:text-white text-sm' href="">43</a>
          </div>

          
            <nav className='flex flex-row justify-center bg-black text-white p-4 rounded-lg' > 
           
            <a href="">Add to cart</a>
            </nav>
          
        </div>



      </div>


    </>
  )
}

export default App
