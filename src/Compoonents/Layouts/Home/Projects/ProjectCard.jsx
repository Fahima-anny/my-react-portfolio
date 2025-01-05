/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ProjectCard = ({project}) => {

    const {id, projectImage, projectName, liveLink} = project ;

    return (
        <div>
              <div className="hero h-[400px] duration-500 hover:shadow-md hover:shadow-gray-600 rounded-md "
                  style={{
                    backgroundImage: `url(${projectImage})`,
                  }}
                >
                <div className="hero-overlay bg-black bg-opacity-70 rounded-md"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="flex flex-col h-[350px] justify-start gap-[250px] ">
                    <h1 className="mb-5 text-2xl text-white font-bold">{projectName}</h1>
                  <div className="flex gap-3">
                  <Link
                    to={`/ProjectDetails/${id}`}
                        className="btn bg-orange-400 text-black hover:bg-orange-400 hover:ring-1 hover:ring-white duration-300">View
                        Details</Link>
                        <Link
                    to={liveLink}
                    target="_blank"
                        className="btn md:w-[140px] bg-orange-400 text-black hover:bg-orange-400 hover:ring-1 hover:ring-white duration-300">Live Link</Link>
                  </div>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default ProjectCard;