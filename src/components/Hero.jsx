import React from 'react'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import Cube from './Cube'

const Hero = () => {
  return (
    <div className='m-0 p-0 box-border h-screen text-white snap-center flex justify-between items-center flex-col'>
      <Navbar/>
      <section className='text-[white] min-h-screen snap-center w-full flex justify-between'>

        <div className='left basis-2/5 flex flex-col justify-center
        gap-[40px]'>

          <h1 className='text-[80px] font-[800]'>Hi, I'm <span className='text-[#1eff00]'>Vyom</span></h1>

          <section className='flex items-center gap-[20px]'>

            <div className='w-[40px] h-[5px] bg-[#1eff00] rounded shadow-[0px_0px_30px_5px_rgba(0,255,89)]'></div>

            <div className='text-[26px]'>
            I develop User Interfaces, APIs & Web Applications.
            </div>

          </section>

          <button className='shadow-[0px_0px_30px_0px_rgba(0,255,89)] font-[700] w-[100px] h-[30px] text-[black] bg-[#1eff00] rounded-[5px] outline-none cursor-[pointer] hover:shadow-[0px_0px_30px_5px_rgba(0,255,89)] transition ease-in-out duration-500'>Learn more</button>

        </div>

        <div className='right basis-1/2'>

          <Canvas camera={{fov:25, position: [5,5,5]}}>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]}/>
            <Cube/>
          </Canvas>

        </div>

      </section>

    </div>
  )
}

export default Hero