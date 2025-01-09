/* eslint-disable react/no-unescaped-entities */
import emailjs from '@emailjs/browser';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosMailOpen } from 'react-icons/io';
import { RiWhatsappFill } from 'react-icons/ri';
import Swal from 'sweetalert2';

const Contacts = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        console.log(email, message);

        emailjs
            .send(
                "service_cpq7311", // Replace with your EmailJS service ID
                "template_tjal17m", // Replace with your EmailJS template ID
                {
                    name: name, // Matches {{name}} in your template
                    email: email, // Matches {{email}} in your template
                    message: message, // Matches {{message}} in your template
                },
                "So5gNmJiB96adK6Wa" // Replace with your EmailJS public key
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    // alert("Message sent successfully!");
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent",
                        // text: "I have got your message & will reply you soon",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset(); // Clear the form after submission
                },
                (error) => {
                    console.error("FAILED...", error);
                    // alert("Message failed to send. Please try again.");
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong! Try again",
                    });
                }
            );

    }


    return (
   <div>

<div className='text-center space-y-3 pb-16'>
    <h4 className='text-orange-300 font-medium italic'>---Contacts---</h4>
    <h1 className='font-bold text-white text-4xl font-serif'>Let's get connected</h1>
    <p className="text-center max-w-3xl mx-auto text-gray-500 font-medium">
    Feel free to connect with me! I'm always open to collaborations, discussions, and exploring exciting opportunities together
</p>
</div>

<div className="grid md:grid-cols-2 gap-10 items-center ">

<div className='space-y-3'>
<div className=" duration-500 px-3 py-5 rounded-2xl">
        {/* <h2 className=" text-2xl font-bold text-center text-white pb-5 ">Write to me</h2> */}
        <div className='flex gap-3 md:gap-6 '>
            <div className='rounded-full bg-orange-400 flex justify-center items-center h-[70px] w-[70px]'>
                <FaLocationDot className='text-black text-2xl' />
            </div>
            <div>
                <h3 className='font-bold text-white text-xl pb-2'>Location</h3>
                <p className='text-gray-400 font-medium'>Dhaka, Bangladesh</p>
            </div>
        </div>
    </div>

    <div className=" duration-500 px-3 py-5 rounded-2xl">
        {/* <h2 className=" text-2xl font-bold text-center text-white pb-5 ">Write to me</h2> */}
        <div className='flex gap-3 md:gap-6 '>
            <div className='rounded-full bg-orange-400 flex justify-center items-center h-[70px] w-[70px]'>
                <RiWhatsappFill  className='text-black text-2xl' />
            </div>
            <div>
                <h3 className='font-bold text-white text-2xl pb-2'>Whats App</h3>
                <p className='text-gray-400 font-medium'>+88 016016 08603</p>
            </div>
        </div>
    </div>

    <div className=" duration-500 px-3 py-5 rounded-2xl">
        {/* <h2 className=" text-2xl font-bold text-center text-white pb-5 ">Write to me</h2> */}
        <div className='flex gap-3 md:gap-6 '>
            <div className='rounded-full bg-orange-400 flex justify-center items-center h-[70px] w-[70px]'>
                <IoIosMailOpen className='text-black text-2xl' />
            </div>
            <div>
                <h3 className='font-bold text-white text-2xl pb-2'>Email</h3>
                <p className='text-gray-400 font-medium'>fahima.info03@gmail.com</p>
            </div>
        </div>
    </div>
</div>

    <div
     className="bg-base-200 px-5 py-7 rounded-md"
     >
        {/* <h2 className=" text-2xl font-semibold text-gray-500 text-center pb-5 ">Write to me</h2> */}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
            <input type="text" placeholder="Enter Your Name" required className="input-lg rounded-md input input-bordered" name="name" />
            <input type="email" placeholder="Enter Your Email" required className="input-lg rounded-md input input-bordered" name="email" />
            <textarea name="message" rows={3} placeholder="Write Your Message" required className="textarea rounded-md textarea-bordered" id=""></textarea>
            <input type="submit" className="btn md:w-[200px] bg-orange-400 hover:bg-orange-500 text-black" value="Send Message" />
        </form>
    </div>

</div>

   </div>
    );
};

export default Contacts;