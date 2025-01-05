import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";


const Projects = () => {

    const [projects, setProjects] = useState([]) ;
useEffect(() => {
    fetch('projects.json')
    .then(res=> res.json())
    .then(data => {
        console.log(data);
        setProjects(data)
    })
} , [])

    return (
        <div>


<div className='text-center space-y-3 pb-16'>
    <h4 className='text-orange-300 font-medium italic'>---Projects---</h4>
    <h1 className='font-bold text-white text-4xl font-serif'>View My Projects</h1>
</div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {
            projects?.map( project => <ProjectCard
                 key={project.id}
                  project={project}
                  ></ProjectCard>)
           }
             </div>
        </div>
    );
};

export default Projects;