import { RiNodejsLine, RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiReactrouter } from "react-icons/si";


const Skills = () => {
    return (
        <div>
            
            <div className='text-center space-y-3 pb-16'>
    {/* <h4 className='text-orange-300 font-medium italic'>---Skills---</h4> */}
    <h1 className='font-bold text-white text-4xl font-serif'>My Expertise</h1>
</div>

<h4 className=' font-medium italic pb-7 text-white text-center'>---Front End---</h4>
            <div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 justify-center items-center">

        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">HTML 5</p>
          <div><img className="w-[30px]" src="https://i.ibb.co/G3rvbcq/html-5.png" alt="" /></div>
        </div>
        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">CSS 3 </p>
          <div><img className="w-[30px]" src="https://i.ibb.co/sQ0gMxH/css-3.png" alt="" /></div>
        </div>
        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">Bootstrap</p>
          <div><img className="w-[25px]" src="https://i.ibb.co/BzrKZSF/bootstrap.png" alt="" /></div>
        </div>
        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">Tailwind CSS</p>
          <div><img className="w-[30px]" src="https://i.ibb.co/qJ8nfHG/Tailwind-CSS-Logo-svg.png" alt="" /></div>
        </div>
       
        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">Javascript</p>
          <div><img className="w-[30px]" src="https://i.ibb.co/ncS71RC/free-javascript-2038874-1720087.webp" alt="" /></div>
        </div>
        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">DaisyUI</p>
          <div><img className="w-[30px]" src="https://i.ibb.co/VjvWYv0/6900993.png" alt="" /></div>
        </div>
       
        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">React JS</p>
          <div><RiReactjsFill className="text-3xl text-blue-500" /></div>
        </div>
        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">React Router</p>
          <div><SiReactrouter className="text-3xl text-red-500" /></div>
        </div>
      </div>
    </div>

    <h4 className=' font-medium italic pt-16 pb-7 text-white text-center'>---Back End---</h4>
            <div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 justify-center items-center">
        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">MongoDB</p>
          <div><SiMongodb className="text-3xl text-green-500" /></div>
        </div>
        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">Firebase</p>
          <div><img className="w-[30px]" src="https://i.ibb.co.com/g9xgsSk/1-R4c8l-HBHu-H5qyq-Ot-Zb3h-w.png" alt="" />
          </div>
        </div>
        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">Node JS</p>
          <div><RiNodejsLine  className="text-3xl text-lime-400"/></div>
        </div>
        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">Express JS</p>
          <div><SiExpress className="text-3xl text-white" /></div>
        </div>
        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">JWT</p>
          <div><img className="w-[30px]" src="https://i.ibb.co.com/Q8LQMHz/1657421703592.png" alt="" /></div>
        </div>
      </div>
    </div>

    <h4 className=' font-medium italic pt-16 pb-7 text-white text-center'>---Others---</h4>
            <div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 justify-center items-center">
        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">Figma</p>
          <div><img className="w-[30px]" src="https://i.ibb.co/hKcBkJt/figma.png" alt="" /></div>
        </div>
        <div
          className="col hover:bg-zinc-900 flex justify-center px-2 gap-1 md:gap-4 items-center py-2 border border-orange-300 rounded-sm hover:text-white  hover:ring-1 hover:ring-white duration-500">
          <p className="font-medium text-lg">Wordpress</p>
          <div><img className="w-[30px]" src="https://i.ibb.co/ydJ5Zkb/wordpress.png" alt="" /></div>
        </div>
      </div>
    </div>

        </div>
    );
};

export default Skills;