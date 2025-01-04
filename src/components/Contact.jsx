
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

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
            <h2 className="text-4xl font-bold text-center py-10 text-primary hover:text-accent">Contact Me</h2>
            <p className='text-center '>Have a question or want to work together? Leave your details and <br />I'll get back to you as soon as possible.</p>
            <div className="card my-10 justify-center   w-full mx-auto  max-w-xl shadow-2xl">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='from_name' className="input input-bordered text-black" />
                            </div>
                            <div className="form-control lg:gap-2 lg:flex-row">
                                <div className="lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" name='from_email' className="input text-black w-full input-bordered" />
                                </div>
                                <div className="lg:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white">Mobile</span>
                                    </label>
                                    <input type="text" placeholder="Mobile" name='from_mobile' className="input w-full input-bordered text-black" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Comments/ Questions</span>
                                </label>
                                <textarea name='massage' className="textarea text-black textarea-bordered " rows={5} placeholder="Your Massage"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-md border-none inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent">Submit Massage</button>
                            </div>
                        </form>
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
