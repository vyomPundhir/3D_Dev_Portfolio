import React from 'react'
import Tilt from 'react-parallax-tilt';

const Card = () => {
  return (
  <Tilt>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <div>
      <img src="https://dummyimage.com/720x400" alt="Shoes" className="rounded-xl" />
    </div>
    

  </figure>

    <div className='flex gap-2 absolute z-10 mt-5 left-3/4'>
      <img src="src\assets\github.svg" alt="github" className='w-[40px] border-2 rounded-full'/>
      {/* <img src="src\assets\clip.svg" alt="clip" className='w-[40px]'/> */}
      <img src="src\assets\paper-clip.svg" alt="clip" className='w-[40px] border-2 rounded-full bg-white'/>
    </div>

  <div className="card-body items-center text-center">
    <h2 className="card-title">Title</h2>
    <p>Description</p>
    <div className="card-actions">
      <span className="btn btn-primary">tech</span>
      <span className="btn btn-primary">tech</span>
      <span className="btn btn-primary">tech</span>
    </div>
  </div>
</div>
  </Tilt>  )
}

export default Card