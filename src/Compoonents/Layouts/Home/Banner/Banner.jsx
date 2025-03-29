import { FaDownload } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Banner = () => {

    const handleDownloadResume = () => {
      const resumePath = '/Fahima Akter - Resume.pdf';
    
      window.open(resumePath, '_blank');

      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Fahima Akter - Resume.pdf'; 
      link.click(); 
      };

    return (
        <div className="pb-5 md:pb-16 pt-5">
            <div className="grid md:grid-cols-2 gap-0 md:gap-10 justify-between">
                <div>
                <div className=" flex flex-col justify-center items-center gap-8">
        <div
          className="rounded-full  h-[278px] w-[278px] flex justify-center items-center shadow-md shadow-white">
          <img src="https://i.ibb.co.com/2qDxBgF/High-Resolution.png" className=" rounded-full  " alt=""/>
        </div>

        <div className="flex gap-4 ">
          <div
            className="border rounded-full  flex justify-center items-center  hover:ring-orange-400 hover:ring-1 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
            <a target="_blank" href="https://github.com/Fahima-anny"><img className="w-[40px]"
                src="https://i.ibb.co/RyZwyXF/github-2.png" alt=""/></a></div>
          <div
            className="border rounded-full  flex justify-center items-center  hover:ring-orange-400 hover:ring-1 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
            <a target="_blank" href="https://x.com/Fahima_Akter813"><img className="w-[40px]"
                src="https://i.ibb.co/Qn7CwvM/twitter.png" alt=""/></a></div>
          <div
            className="border bg-white rounded-full  flex justify-center items-center hover:ring-orange-400 hover:ring-1 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
            <a target="_blank" href="https://www.linkedin.com/in/fahima-akter-web-developer/"><img className="w-[40px]"
                src="https://i.ibb.co/dG3tbBw/linkedin-1.png" alt=""/></a></div>
          <div
            className="border bg-white rounded-full  flex justify-center items-center hover:ring-orange-400 hover:ring-1 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100054025999750"><img className="w-[40px]"
                src="https://i.ibb.co/r4V6WT0/facebook-1.png" alt=""/></a></div>



        </div>

      </div>
                </div>

                <div className="col flex flex-col justify-center md:justify-start items-center md:items-start">
        <h1 className="text-3xl md:text-5xl font-bold mt-16 mb-3 font-serif text-white ">FAHIMA AKTER</h1>
        <h3 className="font-semibold text-xl text-orange-300 mb-3 italic">--Frontend Developer--</h3>
        <p className="text-md font-semibold text-gray-500 para">
          Dedicated and industrious, I ardently pursue excellence. With an adaptive mindset, I efficiently absorb
          knowledge to meet specific demands, fostering continual growth and self-improvement. My commitment extends to
          learning new skills aligned with evolving requirements.</p>
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-5 mt-6">
          <a href="/#projects">
            <button
              className="btn w-[180px] bg-orange-400 text-black hover:bg-orange-500 duration-300 text-lg">View Projects<MdKeyboardDoubleArrowRight className="text-2xl" /></button></a>

            <button
                onClick={handleDownloadResume}
              className="btn w-[180px] text-lg bg-orange-400 text-black hover:bg-orange-500 duration-300">Resume <FaDownload /></button>
        </div>


      </div>
            </div>
        </div>
    );
};

export default Banner;