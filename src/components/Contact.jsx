
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { SlEnvolope } from 'react-icons/sl';
import {  FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';

const Contact = () => {
    const form = useRef();

        const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(
            'service_sspxvpe',  // Replace with your EmailJS service ID
            'template_2gxbrfd', // Replace with your EmailJS template ID
            form.current,
            'DuzWm-OAlzRinV2DE'   // Replace with your EmailJS Public Key
        ).then(
            (result) => {
                console.log('Message Sent Successfully:', result.text);
               toast.success("Message Sent Successfully")
            },
            (error) => {
                console.error('Error Sending Message:', error.text);
              toast.error('Failed to send message, please try again later.')
            }
        );
    };
    return (
        <div id='contact' className='flex flex-col '  data-aos="fade-up"
        data-aos-duration="3000">
            <h2 className="text-4xl font-bold text-center py-10 text-primary hover:text-accent">Contact</h2>
            <div className='flex  flex-col-reverse lg:flex-row items-center'>
            <div className="text-center  ">
                    <h3 className="text-3xl font-bold mb-4">Contact Me </h3>
                    <p className='flex items-center gap-3 '><SlEnvolope></SlEnvolope> Email: <a href="mailto:kayesmahmud2220@gmail.com" className=" underline hover:text-accent"> kayesmahmud2220@gmail.com</a></p>
                    <p className='flex items-center gap-3 ' ><IoCall /> Phone: <a href="tel:+8801892549812" className="hover:text-accent">+8801892549812</a></p>
                    <p className='flex items-center gap-3 ' ><FaWhatsapp></FaWhatsapp> WhatsApp: <a href="https://wa.me/8801729527377" target="_blank" rel="noopener noreferrer" className="hover:text-accent">+8801729527377</a></p>
                    <p className='flex items-center gap-3 ' ><FaLinkedin></FaLinkedin> Linkedin <a href="https://www.linkedin.com/in/kayes-mah/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">https://www.linkedin.com/in/kayes-mah/</a></p>
                </div>
                <div className="card my-10 justify-center   w-full mx-auto  max-w-xl shadow-2xl">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='from_name' className="input input-bordered text-black" />
                            </div>
                            <div className="form-control">
                                <div className="">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" name='from_email' className="input text-black w-full input-bordered" />
                                </div>
                              
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Comments/ Questions</span>
                                </label>
                                <textarea name='massage' className="textarea text-black textarea-bordered " rows={5} placeholder="Your Massage"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-md border-none inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent">Submit Massage</button>
                            </div>
                        </form>
                    </div>
            </div>
           
           
        </div>
    );
};

export default Contact;



// const Contact = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();
        
//         emailjs.sendForm(
//             'your_service_id',  // Replace with your EmailJS service ID
//             'your_template_id', // Replace with your EmailJS template ID
//             form.current,
//             'your_public_key'   // Replace with your EmailJS Public Key
//         ).then(
//             (result) => {
//                 console.log('Message Sent Successfully:', result.text);
//                 alert('Message sent successfully!');
//             },
//             (error) => {
//                 console.error('Error Sending Message:', error.text);
//                 alert('Failed to send message, please try again later.');
//             }
//         );
//     };

//     return (
//         <div id="contact" className="flex flex-col">
//             <h2 className="text-4xl font-bold text-center py-10 text-primary hover:text-accent">Contact Me</h2>
//             <p className="text-center">Have a question or want to work together? Leave your details and I'll get back to you.</p>
//             <form ref={form} onSubmit={sendEmail} className="card-body">
//                 <input type="text" name="user_name" placeholder="Name" className="input input-bordered" required />
//                 <input type="email" name="user_email" placeholder="Email" className="input input-bordered" required />
//                 <textarea name="message" placeholder="Your Message" className="textarea textarea-bordered" required></textarea>
//                 <button type="submit" className="btn bg-primary text-white">Send Message</button>
//             </form>
//         </div>
//     );
// };

// export default Contact;
