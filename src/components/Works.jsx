import React from 'react'
import { categoryNames, htmlCssProjects } from '../constants';
import WebDesign from './WebDesign'
import Development from './Development'
import ProductDesign  from "./ProductDesign";
import { useState } from 'react';
import Card from './Card';

const Works = () => {

  // const [work, setWork] = useState("Web Design")

  return (
    <div className='m-0  p-0 box-border  text-white snap-center'>
      <section className='flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center gap-[100px] mb-24">

            {
              categoryNames.map((item)=>(
                <button key={item.id} className='w-[450px] item py-3 text-[50px] text-center font-[700] cursor-pointer text-transparent relative hover:shadow-[0px_0px_30px_5px_rgba(0,255,89)] focus:shadow-[0px_0px_30px_5px_rgba(0,255,89)] rounded-2xl'>
                  {item.title}
                </button>
              ))
            }

        </div>

        <div className='flex flex-row justify-center items-center flex-wrap gap-20 '>
        {htmlCssProjects.map((project,index) => (
          <div key={index} >
            <Card />
          </div>
        ))}
        </div>
        
        
        {/* <div className="right-works">
          {work === "HTML & CSS" ? (<WebDesign/>) : work === "JavaScript" ? (<Development/>) : (<ProductDesign/>)}
        </div> */}
      </section>
    </div>
  )
}

export default Works
// hover:shadow-[0px_0px_30px_5px_rgba(0,255,89)]