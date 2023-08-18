import React from 'react'
import { categoryNames } from '../constants';
import WebDesign from './WebDesign'
import Development from './Development'
import ProductDesign  from "./ProductDesign";
import { useState } from 'react';
import Card from './Card';

const Works = () => {

  const [work, setWork] = useState("Web Design")

  return (
    <div className='m-0 p-0 box-border h-screen text-white snap-center'>
      <section className='flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center gap-[100px]">

            {/* <div className='item px-5 text-[80px] font-[700] cursor-pointer text-transparent relative hover:shadow-md' onClick={()=>setWork("HTML & CSS")}>HTML & CSS</div>

            <div className='item text-[80px] font-[700] cursor-pointer text-transparent'
            onClick={()=>setWork("JavaScript")}>JavaScript</div>

            <div className='item text-[80px] font-[700] cursor-pointer text-transparent'  onClick={()=>setWork("React")}>ReactJS</div> */}

            {
              categoryNames.map((item)=>(
                <button key={item.id} className='w-[450px] item py-3 text-[50px] text-center font-[700] cursor-pointer text-transparent relative hover:shadow-[0px_0px_30px_5px_rgba(0,255,89)] focus:shadow-[0px_0px_30px_5px_rgba(0,255,89)] rounded-2xl'>
                  {item.title}
                </button>
              ))
            }

        </div>
        

        <div className="right-works">
          {work === "HTML & CSS" ? (<WebDesign/>) : work === "JavaScript" ? (<Development/>) : (<ProductDesign/>)}
        </div>
      </section>
      <div>
        <Card/>
      </div>
    </div>
  )
}

export default Works
// hover:shadow-[0px_0px_30px_5px_rgba(0,255,89)]