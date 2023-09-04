import React from 'react'
import {Blogs} from '../constants'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
      <div id='blogs' className='flex flex-col justify-center items-center gap-[50px] mt-[90px]'>
      <h1 className='text-[white] text-[70px] font-[700]'>Blogs</h1>
      <div className='flex justify-center flex-wrap gap-[70px]'>
      {
        Blogs.map((pj,index)=>(
          <div key={index}>
            <BlogCard blogimage={pj.image} blogname={pj.name} blogdes={pj.description} bloglink={pj.link}/>
          </div>
        ))
      }
      </div>
    </div>

    
  )
}

export default Blog