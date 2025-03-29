/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ProjectCard = ({project}) => {

    const {id, projectImage, projectName, liveLink, details} = project ;

    return (
        <div>
              <div className="relative group">
      {/* Image Container */}
      <div className="duration-500 bg-contain relative overflow-hidden">
        {/* Image */}
        <img src={projectImage} className="w-full h-full object-cover" alt="" />
        
        {/* Black Overlay (Initially Hidden, Appears on Hover) */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300">
        <div className="flex h-full justify-center items-center gap-10 opacity-100">
              <Link
                to={`/ProjectDetails/${id}`}
                className="btn bg-orange-400 text-black hover:bg-orange-400 hover:ring-1 hover:ring-white duration-300">
                View Details
              </Link>
              <Link
                to={liveLink}
                target="_blank"
                className="btn md:w-[140px] bg-orange-400 text-black hover:bg-orange-400 hover:ring-1 hover:ring-white duration-300">
                Live Link
              </Link>
            </div>
        </div>
      </div>
                  <div className="flex flex-col justify-start ">
                    <h1 className="mt-3 mb-1 text-2xl text-center text-white font-bold">{projectName}</h1>
                    <p className="text-gray-400 pb-3 ">{details.slice(0, 120)}{details.length > 120 ? "..." : ""}</p>
                  {/* <div className="flex gap-3 justify-between ">
                  <Link
                    to={`/ProjectDetails/${id}`}
                        className="btn bg-orange-400 text-black hover:bg-orange-400 hover:ring-1 hover:ring-white duration-300">View
                        Details</Link>
                        <Link
                    to={liveLink}
                    target="_blank"
                        className="btn md:w-[140px] bg-orange-400 text-black hover:bg-orange-400 hover:ring-1 hover:ring-white duration-300">Live Link</Link>

                  </div> */}
                </div>
              </div>
        </div>
    );
};

export default ProjectCard;