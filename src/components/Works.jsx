import React from 'react'
import WebDesign from './WebDesign'
import Development from './Development'
import ProductDesign  from "./ProductDesign";
import { useState } from 'react';

const Works = () => {

  const [work, setWork] = useState("Web Design")

  return (
    <div className='m-0 p-0 box-border h-screen text-white snap-center'>
      <section className='flex justify-center'>
        <div className="left basis-1/2 flex ml-[-400px]">
          <div className="flex flex-col gap-[20px]">
            <div className='item text-[80px] font-[700] cursor-pointer text-transparent relative' onClick={()=>setWork("Web Design")}>Web Design</div>
            <div className='item text-[80px] font-[700] cursor-pointer text-transparent'
            onClick={()=>setWork("Development")}>Development</div>
            <div className='item text-[80px] font-[700] cursor-pointer text-transparent'>Illustration</div>
            <div className='item text-[80px] font-[700] cursor-pointer text-transparent'  onClick={()=>setWork("Product Design")}>Product Design</div>
            <div className='item text-[80px] font-[700] cursor-pointer text-transparent'>Social Media</div>
          </div>
        </div>
        

        <div className="right-works">
          {work === "Web Design" ? (<WebDesign/>) : work === "Development" ? (<Development/>) : (<ProductDesign />)}
        </div>
      </section>
    </div>
  )
}

export default Works