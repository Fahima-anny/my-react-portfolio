import emailjs from '@emailjs/browser';

const Contacts = () => {

const handleSubmit = (e) => {
    e.preventDefault() ;
    const form = e.target ;
    const name = form.name.value ;
    const email = form.email.value ;
    const message = form.message.value ;
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
        alert("Message sent successfully!");
        form.reset(); // Clear the form after submission
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Message failed to send. Please try again.");
      }
    );

}

// service_cpq7311

    return (
        <div className="grid md:grid-cols-2 gap-10 justify-start items-center">
            <div className="bg-base-200 px-5 py-7 rounded-2xl">
            <h2 className=" text-2xl font-bold text-center text-white pb-5 ">Write to me</h2>

<form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
<input type="text" placeholder="Enter Your Name" required className="input input-bordered" name="name"/>
<input type="email" placeholder="Enter Your Email" required className="input input-bordered" name="email"/>
<textarea name="message" rows={3} placeholder="Write Your Message" required className="textarea textarea-bordered" id=""></textarea>
<input type="submit" className="btn bg-orange-400 hover:bg-orange-500 text-black" value="Send Message" />
</form>
            </div>

            <div>

            </div>
        </div>
    );
};

export default Contacts;