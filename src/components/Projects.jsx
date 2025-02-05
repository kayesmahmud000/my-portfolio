
// // const Projects = () => {
// //     return (
// //         <div id="project">
// //             <h2 className="text-4xl font-bold text-center mb-10 text-primary hover:text-accent">Projects</h2>
// //         </div>
// //     );
// // };

// import { Link } from "react-router-dom";

// // export default Projects;



// const projects = [
//     {
//         name: 'BOOK BREEZE',
//         description: 'A Book Borrowing website build React and Tailwind CSS.',
//         image: 'https://i.ibb.co.com/wpdtphK/Screenshot-2025-01-04-223139.png',
//         liveLink: 'https://book-breeze-bee17.web.app/',
        
//         codeLink: 'https://github.com/kayesmahmud000/bistro-boss-restaurant',
//         techStack: ['React', 'Tailwind CSS', 'MongoDB'],
//         detailedDescription: 'Book Breeze is a user-friendly book borrowing platform designed for educational institutions.',
//         challengesFaced: 'Implementing a secure user authentication system and real-time data syncing were challenging.',
//         improvementsPlanned: 'Future improvements include adding a recommendation engine and better data visualization.'
//     },
//     {
//         name: 'Smart Eagle Tours & Travels',
//         description: 'A modern travel website offering curated packages and seamless booking experiences.',
//         image: 'https://i.ibb.co.com/nLzk8Vs/Screenshot-2025-01-04-224644.png',
//         liveLink: 'https://smarteaglebd.com/',
//         codeLink: 'https://github.com/mubassir-hasan/smart-eagle-tours-and-travels',
//         techStack: ['Next.js', 'React'],
//         detailedDescription: 'Smart Eagle Tours & Travels simplifies the travel booking process with an elegant UI and integrated payment gateways.',
//         challengesFaced: 'Handling dynamic data loading for multiple travel packages was complex.',
//         improvementsPlanned: 'Planning to integrate a customer review system and multi-language support.'
//     },
//     {
//         name: 'Lingo Bingo',
//         description: 'A Library Management System made with React and Node.js.',
//         image: 'https://i.ibb.co.com/W08C09j/Screenshot-2025-01-04-223429.png',
//         liveLink: 'https://lingo-bingo-d09a2.web.app/',
//         codeLink: 'https://github.com/kayesmahmud000/bistro-boss-restaurant',
//         techStack: ['React', 'Node.js, ' , 'MongoDB'],
//         detailedDescription: 'Lingo Bingo is a web application designed for managing library resources efficiently.',
//         challengesFaced: 'Optimizing the database queries for faster search results was a major challenge.',
//         improvementsPlanned: 'Future plans include adding a digital book lending feature and enhanced reporting tools.'
//     }
// ];

// const ProjectSection = () => {
//     // const [showDetails, setShowDetails] = useState(null);
//     return (
//         <div id="project" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white"  data-aos="fade-up"
//         data-aos-duration="3000">
//         <h2 className="text-4xl font-bold text-center mb-12 text-primary hover:text-accent "> Projects</h2>
//         <div className="max-w-7xl mx-auto px-4">
//                 {projects.map((project, index) => (
//                     <div key={index} className="card lg:flex-row bg-gray-800 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500 mb-10">
//                         <figure className="relative lg:w-1/2 ">
//                             <img src={project.image} alt={project.name} className=" w-full object-cover" />
//                             <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
//                                 {/* <p className="text-lg font-bold text-white">{project.name}</p> */}
//                                 <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-lg">
//                                     Live Demo 🚀
//                                 </a>
//                             </div>
//                         </figure>
//                         <div className="card-body p-6">
//                             <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
//                             <p className="text-gray-400 mb-6">{project.description}</p>
//                             <p className="text-sm text-primary mb-4">Tech Stack: {project.techStack.join(', ')}</p>
//                             <div className="flex justify-between">
//                                 {/* <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-lg">
//                                     Live Demo 🚀
//                                 </a> */}
//                                 <Link to={`/details/${project}`}><button   className="btn bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-lg">
//                                 View More
//                                 </button></Link>
//                                 <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-2 rounded-lg">
//                                     View Code 💻
//                                 </a>
//                             </div>
                           
//                         </div>
                        
//                     </div>
                    
//                 ))}
//             </div>
//             {/* {showDetails && (
//                                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                                     <div className="bg-white  text-black p-8 rounded-lg max-w-lg w-full">
//                                         <h3 className="text-3xl font-bold mb-4">{showDetails.name}</h3>
//                                         <p className="mb-2"><strong>Tech Stack:</strong> {showDetails.techStack.join(', ')}</p>
//                                         <p className="mb-2"><strong>Detailed Description:</strong> {showDetails.detailedDescription}</p>
//                                         <p className="mb-2"><strong>Challenges Faced:</strong> {showDetails.challengesFaced}</p>
//                                         <p className="mb-2"><strong>Planned Improvements:</strong> {showDetails.improvementsPlanned}</p>
//                                         <div className="flex justify-between mt-6">
//                                             <a href={showDetails.liveLink} target="_blank" rel="noopener noreferrer" className="btn bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-lg">
//                                                 Live Demo 🚀
//                                             </a>
//                                             <a href={showDetails.codeLink} target="_blank" rel="noopener noreferrer" className="btn bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-2 rounded-lg">
//                                                 View Code 💻
//                                             </a>
//                                         </div>
//                                         <button onClick={() => setShowDetails(null)} className="mt-4 btn bg-gray-600 text-white px-4 py-2 rounded-lg">
//                                             Close
//                                         </button>
//                                     </div>
//                                 </div>
//                             )} */}
//     </div>
//     );
// };

// export default ProjectSection;

import { Link } from "react-router-dom";

const projects = [
  {
    name: 'Book Breeze',
    description: 'A Book Borrowing website built with React and Tailwind CSS.',
    image: 'https://i.ibb.co/wpdtphK/Screenshot-2025-01-04-223139.png',
    liveLink: 'https://book-breeze-bee17.web.app/',
    codeLink: 'https://github.com/kayesmahmud000/book-breeze',
    techStack: ['React', 'Tailwind CSS', 'MongoDB'],
    detailedDescription: 'Book Breeze is a user-friendly book borrowing platform designed for educational institutions.',
    challengesFaced: 'Implementing a secure user authentication system and real-time data syncing were challenging.',
    improvementsPlanned: 'Future improvements include adding a recommendation engine and better data visualization.'
  },
  {
    name: 'Smart Eagle Tours & Travels',
    description: 'A modern travel website offering curated packages and seamless booking experiences.',
    image: 'https://i.ibb.co/nLzk8Vs/Screenshot-2025-01-04-224644.png',
    liveLink: 'https://smarteaglebd.com/',
    codeLink: 'https://github.com/mubassir-hasan/smart-eagle-tours-and-travels',
    techStack: ['Next.js', 'React'],
    detailedDescription: 'Smart Eagle Tours simplifies travel bookings with an elegant UI and payment gateways.',
    challengesFaced: 'Handling dynamic data loading for multiple travel packages was complex.',
    improvementsPlanned: 'Planning to integrate customer reviews and multi-language support.'
  },
  {
    name: 'Lingo Bingo',
    description: 'A Library Management System built with React and Node.js.',
    image: 'https://i.ibb.co/W08C09j/Screenshot-2025-01-04-223429.png',
    liveLink: 'https://lingo-bingo-d09a2.web.app/',
    codeLink: 'https://github.com/kayesmahmud000/lingo-bingo',
    techStack: ['React', 'Node.js', 'MongoDB'],
    detailedDescription: 'Lingo Bingo is a web app designed for managing library resources efficiently.',
    challengesFaced: 'Optimizing database queries for faster search results was a major challenge.',
    improvementsPlanned: 'Future plans include a digital book lending feature and enhanced reporting tools.'
  }
];

const ProjectSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">Projects</h2>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
          >
            <img src={project.image} alt={project.name} className="w-full object-cover h-52" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <Link to={`/details/${index}`} state={project}>
                <button className="btn bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-lg">
                  View More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
