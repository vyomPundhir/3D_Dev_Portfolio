import React from 'react'

const Who = () => {
  return (
    <div className='m-40 p-0 box-border h-auto text-white snap-center flex justify-center'>
      <section className='text-[white] min-h-screen snap-center w-[1400px]
      flex justify-between'>

        <div className='left-who flex-1 relative'>
          <img src="src\assets\laser.gif" alt="laser" className='rounded-full' />
        </div>

        <div className='right-who flex-1 flex flex-col justify-center
        gap-[20px]'>
          <h1 className='text-[74px] font-[700]'>Think outside the square space</h1>
          <section className='flex items-center gap-[20px]'>
            <div className='w-[40px] h-[5px] bg-[#1eff00] rounded shadow-[0px_0px_30px_5px_rgba(0,255,89)]'></div>
            <div className='text-[26px]'>Who we Are</div>
          </section>
          <div className='text-[24px] text-[#8e8e8e]'>A creative group of designers and developers with a passion for the arts.</div>
          <button className='shadow-[0px_0px_30px_0px_rgba(0,255,89)] font-[700] w-[130px] h-[30px] text-[black] bg-[#1eff00] rounded-[5px] outline-none cursor-[pointer] hover:shadow-[0px_0px_30px_5px_rgba(0,255,89)] transition ease-in-out duration-500'>See our works</button>
        </div>
      </section>
    </div>
  )
}

export default Who