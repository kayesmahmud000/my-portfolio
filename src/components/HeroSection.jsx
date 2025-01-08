import React from 'react';
import photo from '../assets/hero.jpg'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
    return (
        <section id='hero' className="  text-center px-5 py-16 ">
           <div className='flex flex-col-reverse lg:flex-row gap-5 items-center lg:justify-around '>
           <div className='lg:text-right '  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-duration="3000">
           <h1 className="text-5xl font-bold ">Hello, <br />I'm <span className='text-primary hover:text-accent' >
            Kayes</span>.
           <h1 className="mb-5 text-5xl font-bold"></h1>
           </h1>
            <p className="mt-4 text-lg font-bold"> 
            I'm a
            <Typewriter
            words={[" Web Developer", " Frontend Developer", " Full Stack Developer"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />  </p>
            <div className='flex gap-5 justify-end items-center mt-5'>
                <div className='hover:text-accent'><a href="https://www.facebook.com/mah.mud.473648" target='_blank'><FaFacebook size={20}></FaFacebook></a></div>
                <div className='hover:text-accent'><a href="https://github.com/kayesmahmud000" target='_blank'><FaGithub size={20}></FaGithub></a></div>
                <div className='hover:text-accent'><a href="https://www.instagram.com/_m_a_h_m_u_d_2_/" target='_blank'><FaInstagram size={20}></FaInstagram></a></div>
                <div className='hover:text-accent'> <FaLinkedin size={20}></FaLinkedin></div>
            </div>
            <a
                href="https://docs.google.com/document/d/1EeKdNe7IPZBzDiGExwJK6V71rpbo07b33qT2UNhPjd0/edit?tab=t.0" target='_blank'
                className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent"
                download
            >
                📥 Download Resume
            </a>
           </div>
           <div  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-duration="3000">
           <img src={photo} className='lg:h-[400px] mt-10 mb-5 rounded-full'  alt="" />
           </div>
           </div>
           
        </section>
    );
};

export default HeroSection;
