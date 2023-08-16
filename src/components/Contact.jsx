import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from "react";

const Contact = () => {

  const ref = useRef();
  const [success, setSuccces] = useState(null)

  const handleSubmit = e =>{
    e.preventDefault();

  emailjs.sendForm('service_fydcpbh', 'template_0qlpy8k', ref.current, 'G8VQ-uLEYUkAFlB6e')
      .then((result) => {
          console.log(result.text);
          setSuccces(true)
      }, (error) => {
          console.log(error.text);
          setSuccces(false)
      });

};

  return (
    <div className='m-0 p-0 box-border snap-center h-screen'>
      <section className='w-full h-full flex justify-center gap-[120px]'>

        <div className="left basis-1/2 flex justify-end items-center">

          <form ref={ref} className="form w-[500px] flex flex-col gap-[25px] justify-center items-start" onSubmit={handleSubmit}>
            <div className="title font-[700] text-[74px]">Contact Us</div>

            <input placeholder='Name' className='w-full p-[20px] bg-transparent border-[3px] border-[white] rounded-[5px] text-[white] font-[700]' name="name"/>

            <input placeholder='Email' className='w-full p-[20px] bg-transparent border-[3px] border-[white] rounded-[5px] text-[white] font-[700]' name="email"/>

            <textarea placeholder='Write your message' className='w-full p-[20px] bg-transparent border-[3px] border-[white] rounded-[5px] text-[white] font-[700]' name="message"/>

            <button className='w-full bg-transparent text-[#1eff00] text-[22px] font-[700] border-[3px] border-[#1eff00] cursor-pointer rounded-[5px] p-[20px] hover:shadow-[0px_0px_30px_5px_#1eff00] hover:bg-[#c1c1c1] hover:text-[#0c5b00] transition ease-in-out duration-500' type='submit'>Send</button>
            {success &&
              "Your Message has been sent. We will get back to you soon :)"
            }
          </form>
        </div>

        <div className="right basis-1/2 flex justify-center items-center">
          <img src="src\assets\worldmap-1.jpg" alt="map" className='cursor-pointer rounded-[25px] w-[650px] h-[400px] mr-[100px] mt-[80px] hover:shadow-[0px_0px_30px_10px_rgba(0,255,89)] transition ease-in-out duration-500 brightness-75 hover:brightness-100'/>
        </div>
      </section>
    </div>
  )
}

export default Contact