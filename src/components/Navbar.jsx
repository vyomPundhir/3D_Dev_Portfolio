import React from 'react'

const Navbar = () => {
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth' });
};

  return (
    <div id='navbar' className='flex justify-center'>

      <div className='w-[1400px] flex justify-between items-center '>

        <section className='flex items-center gap-[40px]'>

          <a href="/"><img src="src\assets\Logo.jpg" alt="logo" className='w-[130px] cursor-pointer'/></a>

          <section className='flex gap-[20px] cursor-pointer text-[#d3d1d1] font-[500]'>

            <button 
            onClick={()=>scrollToSection('about')}
            className=' hover:text-[black] hover:bg-[white] hover:font-[500] hover:shadow-[0px_0px_30px_0px_rgba(252,252,252)] w-[100px] text-center rounded transition ease-in-out duration-500 brightness-75 hover:brightness-100'>About</button>

            <button 
            onClick={()=> scrollToSection('techstack')}
            className=' hover:text-[black] hover:bg-[white] hover:font-[500] hover:shadow-[0px_0px_30px_0px_rgba(252,255,252)] w-[100px] text-center rounded transition ease-in-out duration-500 brightness-75 hover:brightness-100'>Tech Stack</button>

            <button 
            onClick={()=>scrollToSection('projects')}
            className=' hover:text-[black] hover:bg-[white] hover:font-[500] hover:shadow-[0px_0px_30px_0px_rgba(252,252,252)] w-[100px] text-center rounded transition ease-in-out duration-500 brightness-75 hover:brightness-100'>Projects</button>

            <button 
            onClick={()=>scrollToSection('blogs')}
            className=' hover:text-[black] hover:bg-[white] hover:font-[500] hover:shadow-[0px_0px_30px_0px_rgba(252,252,252)] w-[100px] text-center rounded transition ease-in-out duration-500 brightness-75 hover:brightness-100'>Blogs</button>

            <button 
            onClick={()=>scrollToSection('contactus')}
            className=' hover:text-[black] hover:bg-[white] hover:font-[500] hover:shadow-[0px_0px_30px_0px_rgba(252,252,252)] w-[100px] text-center rounded transition ease-in-out duration-500 brightness-75 hover:brightness-100'>Contact Us</button>

          </section>

        </section>
        
        <section className='flex gap-[25px]'>
          
          <button className='shadow-[0px_0px_30px_0px_rgba(0,255,89)] mt-[-5px] font-[700] w-auto px-5  h-auto py-1.5 text-md text-[black] bg-[#1eff00] rounded-[5px] outline-none cursor-[pointer] hover:shadow-[0px_0px_30px_5px_rgba(0,255,89)] transition ease-in-out duration-500'>
            <a href="https://drive.google.com/file/d/1E1z1tfGPIfg7twVfCAvFXFrFlso8fYWt/view?usp=drive_link" target="_blank">Download Resume</a>
          </button>
        </section>

        
      </div>
        <button
          onClick={()=> scrollToSection('navbar')}
          className='w-16 h-16 fixed z-10 bottom-12 right-12'>
            <img src="src\assets\upArrow.png" alt="up arrow" />
        </button>
    </div>
  )
}

export default Navbar