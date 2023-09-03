import React from 'react'
import CardTech from './CardTech'
import {techStackNames} from '../constants';

const TechStack = () => {
  
  return (
    <div id='techstack' className='flex flex-col justify-center items-center gap-[50px]'>
      <h1 className='text-[white] text-[70px] font-[700]'>Tech Stack</h1>
      <div className='flex justify-center flex-wrap gap-[70px]'>
      {
        techStackNames.map((pj,index)=>(
          <div key={index}>
            <CardTech techimage={pj.image} techcontent={pj.content} techcolor={pj.color} />
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default TechStack




