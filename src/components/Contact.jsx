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
    <div className='m-0 p-0 box-border snap-center w-full h-screen bg-black'>
      <section className='w-full h-full flex justify-center gap-[120px]'>

        <div className="left basis-1/2 flex justify-end items-center">

          <form ref={ref} className="form w-[500px] flex flex-col gap-[25px] justify-center items-start" onSubmit={handleSubmit}>
            <div className="title font-[700] text-[74px]">Contact Us</div>

            <input placeholder='Name' className='w-full p-[20px] bg-transparent border-[3px] border-[white] rounded-[5px] text-[white] font-[700]' name="name"/>

            <input placeholder='Email' className='w-full p-[20px] bg-transparent border-[3px] border-[white] rounded-[5px] text-[white] font-[700]' name="email"/>

            <textarea placeholder='Write your message' className='w-full p-[20px] bg-transparent border-[3px] border-[white] rounded-[5px] text-[white] font-[700]' name="message"/>

            <button className='w-full bg-transparent text-[#1eff00] text-[22px] font-[700] border-[3px] border-[#1eff00] cursor-pointer rounded-[5px] p-[20px] hover:shadow-[0px_0px_30px_5px_#1eff00] hover:bg-[#c1c1c1] hover:text-[#0c5b00] transition ease-in-out duration-500' type='submit'>Send</button>
            {success &&
              "Your Message has been sent. We will get back to you soon..."
            }
          </form>
        </div>

        <div className="right basis-1/2 flex justify-center items-center">
          {/* <video loop autoplay>
            <source src={earth} type="video/mp4" />
          </video> */}
          <img src="src\assets\earth.gif" alt="earth" className='rounded-full' />
        </div>
      </section>
    </div>
  )
}

export default Contact