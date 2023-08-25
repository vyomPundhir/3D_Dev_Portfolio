import React from 'react'
import Tilt from 'react-parallax-tilt';
import {htmlCssProjects, tailwindProjects} from '../constants'


const Card = ({title, des, tags, git, link, image}) => {
  return (
  <Tilt>
    <div className="card w-96 border-[2px] border-[#1eff00] shadow-[0px_0px_17px_1px_rgba(0,255,89)] hover:shadow-[0px_0px_30px_10px_rgba(0,255,89)] transition ease-in-out duration-500 cursor-pointer">
      <figure className="px-10 pt-10">
        <div>
          <img src={image} alt="img" className="rounded-xl" />
        </div>
      </figure>

      <div className='flex gap-2 absolute z-10 mt-5 left-3/4'>
        <a href={git} target="_blank">
          <img src="src\assets\github.svg" alt="github" className='w-[40px] border-2 rounded-full cursor-pointer'/>
        </a>
      
        <a href={link} target="_blank">
          <img src="src\assets\paper-clip.svg" alt="clip" className='w-[40px] border-2 rounded-full bg-white cursor-pointer'/>
        </a>
      </div>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-[25px]">{title}</h2>
        <p className='text-[19px] text-[#afaeaf]'>{des}</p>
        <div className="card-actions">
          {tags.map((tag) => (
            <span key={tag.name} className={`text-[20px] font-[700]`}
            style={{ color: tag.color }}
            >
              {`#${tag.name}`}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Tilt>  )
}

export default Card