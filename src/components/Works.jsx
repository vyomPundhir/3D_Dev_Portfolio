import React from 'react'
import {categoryNames, htmlCssProjects, tailwindProjects, reactjsProjects} from '../constants';
import WebDesign from './WebDesign'
import Development from './Development'
import ProductDesign  from "./ProductDesign";
import { useState } from 'react';
import Card from './Card';

const Works = () => {

  const [project, setProject] = useState(htmlCssProjects)

  const handleClick = (projectType) => {
    if(projectType === 'HTML & CSS'){
      setProject(htmlCssProjects)
    }
    if(projectType === 'Tailwind CSS'){
      setProject(tailwindProjects)
    }
    if(projectType === 'React'){
      setProject(reactjsProjects)
    }
  }

  return (
    <div className='m-0  p-0 box-border  text-white snap-center'>
      <section className='flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center gap-[100px] mb-24">

            {
              categoryNames.map((item)=>(
                <button 
                key={item.id} 
                onClick={()=> handleClick(item.title)}
                className='w-[300px] item py-3 text-[42px] text-center font-[700] cursor-pointer text-transparent relative hover:shadow-[0px_0px_30px_5px_rgba(0,255,89)] focus:shadow-[0px_0px_30px_5px_rgba(0,255,89)] rounded-2xl'>
                  {item.title}
                </button>
              ))
            }

        </div>

        <div className='flex flex-row justify-center items-center flex-wrap gap-20 '>
          {project.map((pj,index) => (
            <div key={index} >
              <Card title={pj.name} des={pj.description} git={pj.source_code_link} link={pj.live_link} image={pj.image} tags={pj.tags}/>
            </div>
          ))}
        </div>
        
      </section>
    </div>
  )
}

export default Works
// hover:shadow-[0px_0px_30px_5px_rgba(0,255,89)]