import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center text-primary-content p-10">
  <aside>
   
     <h1 className='text-3xl font-bold text-primary hover:text-accent'>Kayes</h1>
    
  </aside>
  <nav>
    <div className='flex gap-5 justify-end items-center mt-5'>
                   <div className='hover:text-accent'><a href="https://www.facebook.com/mah.mud.473648" target='_blank'><FaFacebook size={20}></FaFacebook></a></div>
                   <div className='hover:text-accent'><a href="https://github.com/kayesmahmud000" target='_blank'><FaGithub size={20}></FaGithub></a></div>
                   <div className='hover:text-accent'><a href="https://www.instagram.com/_m_a_h_m_u_d_2_/" target='_blank'><FaInstagram size={20}></FaInstagram></a></div>
                   <div className='hover:text-accent'><a href="https://www.linkedin.com/in/kayes-mah/" target='_blank'> <FaLinkedin size={20}></FaLinkedin></a> </div>
               </div>
  </nav>
  <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
</footer>
        </div>
    );
};

export default Footer;