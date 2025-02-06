

const About = () => {
    return (
        <div className="grid grid-cols-1 gap-0 md:gap-10 md:grid-cols-3">
           <div className="md:col-span-2 order-2 md:order-1">
           <div className='space-y-3 pb-0 md:pb-16'>
    <h4 className='text-orange-300 font-medium italic text-center md:text-left'>---About Me---</h4>
    <h1 className='font-bold text-white text-4xl font-serif text-center md:text-left pb-4'>So Who I am?</h1>
    <p className="text-md font-semibold text-gray-500 para">Hi, I’m <span className="font-bold text-gray-400">Fahima Akter</span>. I’m a <span className="font-bold text-gray-400">Frontend Developer</span>, expertise in <span className="font-bold text-gray-400 italic">MERN Stack</span>, who loves building websites that look great and work even better.
<br /> <br />I started programming because I was curious about how websites are made. Over the time, I started enjoying this and that curiosity turned into a <span className="font-bold text-gray-400">passion</span>. It wasn’t always easy—there were moments when I felt stuck or doubted myself. The ups and downs make this profession interesting for me. It took lots of <span className="font-bold text-gray-400">sleepless nights</span> to be whatever I am today. But every challenge taught me something new and pushed me to keep going. This is only the starting of my <span className="font-bold text-gray-400">endless Programming journey</span>.<br /> <br /> When I’m not coding, I enjoy drawing, reading, and sometimes just going to travel to clear my head. <span className="font-bold text-gray-400">Thanks</span> for stopping by my portfolio!</p>

</div>
           </div>
           <div className="order-1 md:order-2">
            <img src="https://i.ibb.co/bgqtsJt/15300422930.png" alt="" />
           </div>
        </div>
    );
};

export default About;