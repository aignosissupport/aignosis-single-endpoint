import React, { useRef, useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { FaMapMarkerAlt, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import fetchData from './config/fetchData';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import tiger from './aboutus/tiger.png';
const ContactPage = () => {

  const [data, setData] = useState({
    name: '',
    age: '',
    city: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const form = useRef();

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Allow only digits and limit to 10 characters
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setData((prevData) => ({
        ...prevData,
        phone: numericValue,
      }));
    } else{
    setData((prevData) => ({
      ...prevData,
      [name]: name === "age" ? Number(value) : value, // Ensure age is a number
    }));
  }
  };

  // Function to send data to the API
  const contact = async (e) => {
    e.preventDefault();
     // Check if phone number is exactly 10 digits
  if (data.phone.length !== 10) {
    toast.error("Phone number must be exactly 10 digits!");
    return;
  }

    try {
      setLoading(true);
      const {response} = await fetchData({
        url: '/api/otp/contact-us',
        method: 'POST',
        data,
      });
      console.log('API response:', response);
      if(response.status == 200){
        toast.success("Message sent successfully!");
      }
      setLoading(false);
      // alert('Message sent successfully!');
         
      // Reset the form after successful submission
      setData({
        name: '',
        age: '',
        city: '',
        phone: '',
        message: '',
      });
    
   
    } catch (err) {
      console.error('Error sending message:', err.message);
      toast.error("Failed to send the message. Please try again.");
      setData({
        name: '',
        age: '',
        city: '',
        phone: '',
        message: '',
      });
      // alert('Failed to send the message. Please try again.');
    }
  };

  return (
    <>
     <ToastContainer />
      {/* Contact Form Section */}
      <div id="contact" className="2xl:h-[50vw] max-sm:mt-[60px] h-full md:h-[70vw] text-white flex justify-center items-center w-full font-montserrat bg-[#1A0C25]">
        <div className="w-full h-[90%] flex justify-center items-center flex-col border-t max-sm:m-[1.5rem] rounded-[14rem] border-[#B874B580] max-sm:rounded-[7rem]">
          <div className="w-full flex-col h-[15vw] max-sm:h-[50vw] justify-center flex items-center">
            <div>
              <span className="text-center 2xl:text-7xl md:text-5xl max-sm:text-2xl font-semibold leading-[3rem]">
                Get in Touch with Ai.gnosis
              </span>
            </div>
            <div className="px-[5vw]">
              <p className="text-center mt-[2vw] 2xl:text-base md:text-sm text-xs">
                We’d love to hear from you! Whether you have questions, feedback, or would like to schedule a visit, our contact form makes it easy to reach out.
              </p>
            </div>
          </div>
          <div className="w-full h-full pb-10 md:h-[45vw] px-[5vw] gap-5 flex flex-col md:flex-row justify-center items-center">
          <img src={tiger} className='hidden md:block scale-[.5] mt-[45vw]'/>
            <div className="w-[100%] md:w-[40%] h-[90%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1632856469087!2d75.8265625!3d26.898312500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b17869bccecd663%3A0xda5f864a40498db5!2sAignosis!5e0!3m2!1sen!2sin!4v1738730292539!5m2!1sen!2sin"  referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="w-[100%] md:w-[40%] px-[4vw] h-[70%]">
              <span className="2xl:text-base md:text-sm text-xs">
                Simply fill in your details below, and we’ll get back to you as soon as possible. You can also find us on the map, showcasing our headquarters and partner locations. For immediate assistance, feel free to call or email us directly!
              </span>
              <form ref={form} onSubmit={contact} className="mt-4 2xl:text-base md:text-sm space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={data.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-[#2521276B] rounded-md"
                />
                <input
                  type="text"
                  name="age"
                  placeholder="Your Age"
                  value={data.age}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-[#2521276B] rounded-md"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Your City"
                  value={data.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-[#2521276B] rounded-md"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={data.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-[#2521276B] rounded-md"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={data.message}
                  onChange={handleInputChange}
                  required
                  className="w-full h-32 px-4 py-2 bg-[#2521276B] rounded-md resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-[60vw] max-sm:mt-[11px] max-sm:m-auto md:w-[14rem] cursor-pointer mt-[5rem] gap-4 border-2 border-[#B740A1] rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] group bg-transparent hover:bg-[#B740A1] transition-colors duration-300"
                >
                  <span className="text-white">Send Message</span>
                  <div className="w-[2.5rem] h-[2.5rem] justify-center flex items-center text-white text-xl group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1]">
                    <GoArrowUpRight />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
