import React from 'react'
import laser from "../assets/laser.gif"

const Who = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='about' className='p-0 box-border h-auto text-white snap-center flex justify-center'>
      <section className='text-[white] min-h-screen snap-center w-[1400px]
      flex justify-center gap-[190px]'>

        <div className='left-who flex-1 flex justify-center items-center'>
          <img src={laser} alt="laser" className='rounded-full mt-[30px]'/>
        </div>

        <div className='right-who flex-1 flex flex-col justify-center
        gap-[50px]'>
          <h1 className='text-[74px] font-[700]'>About Me</h1>
          <div className='text-[24px] text-[#e8eaea] flex flex-col gap-[30px]'>
            <div className='border-2 border-[#1eff00] px-8 py-4 rounded-[10px]'>I specialize in front-end web development, proficient in HTML5, CSS3, and TailwindCSS for crafting responsive and captivating interfaces.
            </div>

            <div className='border-2 border-[#67fffe] px-8 py-4 rounded-[10px]'>My JavaScript expertise enables me to create dynamic user experiences, coupled with mastery in ReactJS for building complex UIs.
            </div>

            <div className='border-2 border-[#ff0098] px-8 py-4 rounded-[10px]'>Currently, I'm learning backend development, using NodeJS, ExpressJS, and MongoDB to build robust server-side applications.
            </div>
          </div>
          <button 
          onClick={()=>scrollToSection('projects')}
          className='shadow-[0px_0px_30px_0px_rgba(0,255,89)] font-[700] w-[130px] h-[30px] text-[black] bg-[#1eff00] rounded-[5px] outline-none cursor-[pointer] hover:shadow-[0px_0px_30px_5px_rgba(0,255,89)] transition ease-in-out duration-500'>See my work</button>
        </div>
      </section>
    </div>
  )
}

export default Who