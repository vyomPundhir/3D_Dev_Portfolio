import React from 'react'
import Tilt from 'react-parallax-tilt'
import {Blogs} from '../constants'

const BlogCard = ({blogimage, blogdes, blogname, bloglink}) => {
  return (
    <Tilt>
      <div 
      // style={boxShadowStyle}
      className='card w-96 bg-transparent pb-4 border-[#1eff00] shadow-[0px_0px_17px_1px_rgba(0,255,89)] hover:shadow-[0px_0px_30px_10px_rgba(0,255,89)] transition ease-in-out duration-500'>
        <figure className="px-5 pt-10 pb-1">
          <img src={blogimage} alt="tech" className="rounded-xl w-[300px] h-[200px]" />
        </figure>

        <div className='flex absolute z-10 mt-5 ml-[30px] left-3/4'>
        <a href={bloglink} target="_blank">
          <img src="src\assets\paper-clip.svg" alt="clip" className='w-[40px] border-2 rounded-full bg-white cursor-pointer'/>
        </a>
        </div>

        <div className="flex justify-center">
          <h2 className="text-[25px] font-[700] pt-[20px] pb-[10px] w-[300px] text-center">{blogname}</h2>
        </div>
        <div className="items-center text-center">
          <div className="text-[20px] font-[500] text-[#a9aaaa] pb-5">{blogdes}</div>
        </div>
      </div>
    </Tilt>
  )
}

export default BlogCard