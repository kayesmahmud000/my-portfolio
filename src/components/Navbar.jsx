
import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { useTheme } from '../context/ThemeProvider';
import { MdLightMode } from "react-icons/md";
import { CiDark } from 'react-icons/ci';
import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            {/* Navbar Container */}
            <div className="navbar fixed bg-opacity-40 z-50 max-w-7xl mx-auto">
                <div className="navbar-start" ata-aos="fade-right"
     data-aos-offset="300"
     data-aos-duration="3000">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            
                        <TiThMenu size={20} />
                        </div>
                        {/* Mobile Dropdown Links with Smooth Scrolling */}
                        <ul className="menu menu-sm dropdown-content rounded-box z-[1]   p-2 shadow">
                        {["about", "skills", "project", "contact"].map((section) => (
                                <li key={section} className="text-lg font-semibold">
                                    <Link
                                        to={section}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        activeClass="  font-bold underline"
                                        className="hover:text-accent"
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Logo */}
                <div>
                <Link to='hero'smooth={true}
                                        duration={500}
                                        offset={-80} 
                                        >
                  <h1  className='text-3xl font-bold text-primary cursor-pointer hover:text-accent'>Kayes</h1></Link>
                </div>
                </div>

                {/* Navbar Center Links with Smooth Scrolling */}
                <div className="navbar-end gap-6" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-duration="3000">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu gap-3 menu-horizontal px-1">
                            {/* Theme Toggle Button */}
                            <li>
                                <button onClick={toggleTheme} className="p-2 mt-1 rounded">
                                    {theme === 'dark' ? <MdLightMode size={20} /> : <CiDark size={20} />}
                                </button>
                            </li>
                            {/* Smooth Scrolling Links */}
                            {["about", "skills", "project", "contact"].map((section) => (
                                <li key={section} className="text-lg font-semibold">
                                    <Link
                                        to={section}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        activeClass="  font-bold underline"
                                        className="hover:text-accent"
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Download Resume Button */}
                    <div>
                        <a
                            href="https://docs.google.com/document/d/1EeKdNe7IPZBzDiGExwJK6V71rpbo07b33qT2UNhPjd0/edit?tab=t.0" target='_blank'
                            className="btn btn-md border-none inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent"
                            download
                        >
                            📥 Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// import { useTheme } from '../context/ThemeProvider';
// import { MdLightMode } from "react-icons/md";
// import { CiDark } from 'react-icons/ci';


// const Navbar = () => {
//     const { theme, toggleTheme } = useTheme();
//   return (
//     <nav className="flex justify-between items-center p-5 ">
//       <h1 className="text-2xl font-bold ">My Portfolio</h1>
//       <div className="space-x-4">
//      <ul>
//         <li> <button onClick={toggleTheme} className="p-2   rounded">
//                     {theme === 'dark' ? <MdLightMode /> :<CiDark />}
//                 </button></li>
//                 <li>  <NavLink 
//           to="/about" 
//           className={({ isActive }) => isActive ? "text-accent" : ""}
//         >
//           About
//         </NavLink></li>
//               
//      </ul>
       
       
       
        
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
