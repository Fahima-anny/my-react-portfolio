import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const ProjectDetails = () => {

    const [myProject, setMyProject] = useState([])
    const data = useParams() ;
    const ID = parseInt(data.id)

useEffect(() => {
    fetch('/projects.json')
    .then(res=> res.json())
    .then(data => {
        console.log(data);
        const project = data?.filter( d => d.id === ID)
        setMyProject(project[0])
    })
} , [ID])

console.log(myProject);

const { projectName, liveLink, willImprove, challenges, clientSideGithub, 
     // serverSideGithub,
      details, technologiesUsed} = myProject ;

    return (
        <div>
            <div className="">

          <div className="flex flex-col justify-center gap-2 pt-3">
         
          <h3 className="font-bold text-2xl text-blue-500">{}</h3>

          <h3 className="lg:grid grid-cols-3 gap-2  pb-3 pt-1 font-semibold">
               <span className="col-span-1 text-white">Project Name : </span> 
               <span className="col-span-2 text-3xl">{projectName}</span>
               </h3>
          <h3 className="lg:grid grid-cols-3 gap-2  pb-3 pt-1 font-semibold">
               <span className="col-span-1 text-white">Description : </span> 
               <span className="col-span-2 text-gray-300 font-normal">{details}</span>
               </h3>
          <h3 className="lg:grid grid-cols-3 gap-2  pb-3 pt-1 font-semibold">
               <span className="col-span-1 text-white">Live Link : </span> 
               <span className="col-span-2 text-blue-400 "><Link target="_blank" to={liveLink}>{liveLink}</Link></span>
               </h3>

               <h3 className="lg:grid grid-cols-3 gap-2  pb-3 pt-1 font-semibold ">
               <span className="col-span-1 text-white">Client Side Code : </span> 
               <span className="col-span-2 text-blue-400"><Link target="_blank" to={clientSideGithub}>{clientSideGithub}</Link></span>
               </h3>

          {/* <h3 className="lg:grid grid-cols-3 gap-2 pb-3 pt-1 font-semibold">
               <span className="col-span-1 text-white">Server Side Code : </span> 
               {
                serverSideGithub === "" 
                ?  <p className="text-gray-400">No Server Side Implemented</p>
                : <span className="col-span-2  text-blue-400"><Link target="_blank" to={serverSideGithub}>{serverSideGithub}</Link></span>  

                }
            </h3> */}
          <h3 className="lg:grid grid-cols-3 gap-2 pb-3 pt-1 font-semibold">
               <span className="col-span-1 text-white">Technologies used : </span> 
               <span className="col-span-2  text-orange-300">{
                technologiesUsed?.map((tech, idx) => <li key={idx}>{tech}</li>)
                }</span>
               </h3>
          <h3 className="lg:grid grid-cols-3 gap-2 pb-3 pt-1 font-semibold">
               <span className="col-span-1 text-white">Challenges I Faced : </span> 
               <span className="col-span-2  text-white">{
                challenges?.map((tech, idx) => <li key={idx}>{tech}</li>)
                }</span>
               </h3>
          <h3 className="lg:grid grid-cols-3 gap-2 pb-3 pt-1 font-semibold">
               <span className="col-span-1 text-white">Want to Improve in Future : </span> 
               <span className="col-span-2  text-orange-300">{
                willImprove?.map((tech, idx) => <li key={idx}>{tech}</li>)
                }</span>
               </h3>
          </div>
       </div>
       </div>
  
    );
};

export default ProjectDetails;