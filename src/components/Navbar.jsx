import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center'>

      <div className='w-[1400px] flex justify-between items-center '>

        <section className='flex items-center gap-[40px]'>

          <img src="src\assets\Logo.jpg" alt="logo" className='w-[130px] cursor-pointer'/>

          <section className='flex gap-[20px] cursor-pointer text-[#d3d1d1] font-[500]'>

            <div className=' hover:text-[black] hover:bg-[white] hover:font-[500] hover:shadow-[0px_0px_30px_0px_rgba(252,252,252)] w-[55px] text-center rounded transition ease-in-out duration-500 brightness-75 hover:brightness-100'>Home</div>

            <div className=' hover:text-[black] hover:bg-[white] hover:font-[500] hover:shadow-[0px_0px_30px_0px_rgba(252,255,252)] w-[55px] text-center rounded transition ease-in-out duration-500 brightness-75 hover:brightness-100'>Studio</div>

            <div className=' hover:text-[black] hover:bg-[white] hover:font-[500] hover:shadow-[0px_0px_30px_0px_rgba(252,252,252)] w-[55px] text-center rounded transition ease-in-out duration-500 brightness-75 hover:brightness-100'>Works</div>

            <div className=' hover:text-[black] hover:bg-[white] hover:font-[500] hover:shadow-[0px_0px_30px_0px_rgba(252,252,252)] w-[65px] text-center rounded transition ease-in-out duration-500 brightness-75 hover:brightness-100'>Contact</div>

          </section>

        </section>
        
        <section className='flex gap-[25px]'>
          <img src="src\assets\search.png" alt="search" className="w-[20px] h-[20px] cursor-pointer"/>
          <button className='shadow-[0px_0px_30px_0px_rgba(0,255,89)] mt-[-5px] font-[700] w-[100px] h-[30px] text-[black] bg-[#1eff00] rounded-[5px] outline-none cursor-[pointer] hover:shadow-[0px_0px_30px_5px_rgba(0,255,89)] transition ease-in-out duration-500'>Hire Now</button>
        </section>
      </div>
    </div>
  )
}

export default Navbar