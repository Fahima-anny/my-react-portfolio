import { FaDownload } from "react-icons/fa";

const Navbar = () => {

  const handleDownload = () => {
    const resumePath = '/Fahima Akter - Resume.pdf';
    
    window.open(resumePath, '_blank');

    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Fahima Akter - Resume.pdf'; 
    link.click(); 
    };

    const links = 
    <>
     <li><a href="/#home">Home</a></li>
     <li><a href="/#about">About Me</a></li>
     <li><a href="/#skills">Skills</a></li>
     <li><a href="/#projects">Projects</a></li>
     <li><a href="/#contacts">Contacts</a></li>
    </>

    return (
        <div className="fixed w-screen bg-base-100 z-50">
            <div className="navbar items-center  max-w-screen-xl mx-auto py-5 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn pl-0 btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {links}
      </ul>
    </div>
    <a className="font-black italic text-lg md:text-3xl font-serif text-white rounded-full text-center md:text-left"> Fahima Akter</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-gray-400 font-medium">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <button 
    onClick={handleDownload}
    className="btn bg-orange-400 text-black text-lg hover:bg-orange-500 duration-300">Resume <FaDownload /></button>
  </div>
</div>
        </div>
    );
};

export default Navbar;