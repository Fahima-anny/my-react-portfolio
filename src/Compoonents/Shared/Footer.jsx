import { BsFillFileEarmarkCodeFill } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className=" pb-10 bg-black text-white" id="footerSection">
  
        <hr className="border-t-2  pb-10" />

<div className="flex px-2 flex-col md:flex-row gap-10 justify-between items-center mx-auto max-w-screen-xl py-5 text-center md:text-left">
<div>
    
    <h2 className=" text-2xl font-semibold italic">Follow me on :</h2>
    
    <div className="flex gap-4 justify-center pt-2">
              <div
                className=" rounded-full shadow-white shadow flex justify-center items-center hover:ring-orange-400 hover:ring-2 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <a target="_blank" href="https://github.com/Fahima-anny"><img className="w-[40px]"
                    src="https://i.ibb.co/RyZwyXF/github-2.png" alt=""/></a></div>
              <div
                className=" rounded-full shadow-white shadow flex justify-center items-center hover:ring-orange-400 hover:ring-2 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <a target="_blank" href="https://twitter.com/Fahima_Akter813"><img className="w-[40px]"
                    src="https://i.ibb.co/Qn7CwvM/twitter.png" alt=""/></a></div>
              <div
                className="bg-white rounded-full shadow-white shadow flex justify-center items-center hover:ring-orange-400 hover:ring-2 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <a target="_blank" href="https://www.linkedin.com/in/fahima-akter-web-developer/"><img className="w-[40px]"
                    src="https://i.ibb.co/dG3tbBw/linkedin-1.png" alt=""/></a></div>
              <div
                className="bg-white rounded-full shadow-white shadow flex justify-center items-center hover:ring-orange-400 hover:ring-2 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100054025999750"><img className="w-[40px]"
                    src="https://i.ibb.co/r4V6WT0/facebook-1.png" alt=""/></a></div>
    
            </div>
    </div>
    
    <div>
    <h2 className="flex text-2xl font-semibold items-center justify-center md:justify-start gap-1"><BsFillFileEarmarkCodeFill className="text-lg"/>Passionate about Coding</h2>
    <p className="text-center font-serif text-xl font-medium text-gray-300 pt-2">&#169;copyright <span className="text-orange-300 italic font-semibold">Fahima Akter</span> - All rights reserved</p>
    </div>
</div>

      </footer>
    );
};

export default Footer;