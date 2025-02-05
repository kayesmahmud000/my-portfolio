import { useLocation, useNavigate } from "react-router-dom";

const DetailsPage = () => {
  const location = useLocation();
  const project = location.state;
  const navigate = useNavigate();

  if (!project) {
    return <div>No project details available.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-900 text-white rounded-lg">
      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
      <img src={project.image} alt={project.name} className="w-full mb-6 rounded-lg" />
      <p className="text-lg mb-4"><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
      <p className="text-lg mb-4"><strong>Description:</strong> {project.detailedDescription}</p>
      <p className="text-lg mb-4"><strong>Challenges Faced:</strong> {project.challengesFaced}</p>
      <p className="text-lg mb-4"><strong>Future Plans:</strong> {project.improvementsPlanned}</p>
      <div className="flex justify-between mt-6">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-lg">
          Live Project
        </a>
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-2 rounded-lg">
          View Code
        </a>
      </div>
      <button onClick={() => navigate(-1)} className="mt-6 btn bg-gray-600 text-white px-4 py-2 rounded-lg">
        Go Back
      </button>
    </div>
  );
};

export default DetailsPage;
