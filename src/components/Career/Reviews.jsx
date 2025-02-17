import React from "react";

const Reviews = () => {
  return (
    <div className="bg-[#1A0C25] text-white max-sm:h-[180vw]  flex flex-col items-center py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-10">
      <div className="flex items-center justify-center gap-4">
        <div className="h-1 w-20 bg-gradient-to-l from-pink-500 to-transparent rounded-full"></div>
        <span className="text-white font-semibold tracking-widest">Reviews</span>
        <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
      </div>
        <h1 className="text-3xl text-[Montserrat] font-bold mb-4">Hear from Our Team</h1>
        <p className="text-sm md:text-base">
          At Aignosis, our team members are the heart of our mission to
          revolutionize autism detection <br/> through AI. Here’s what they have to
          say about their experiences:
        </p>
      </div>

      {/* Testimonial Section */}
      <div
  className="rounded-lg shadow-lg max-w-xl w-full p-6 relative flex flex-col items-center gap-6"
  style={{
    background: "radial-gradient(circle, #1A0C25 20%, #43284C 100%)",
  }}
>
  {/* Navigation Buttons */}
  <button className="hidden md:flex absolute left-[-3rem] top-1/2 -translate-y-1/2 bg-[#811F67] w-10 h-10 rounded-full flex items-center justify-center text-white text-lg hover:cursor transition">
    &#8592;
  </button>
  <button className="hidden md:flex absolute right-[-3rem] top-1/2 -translate-y-1/2 bg-[#811F67] w-10 h-10 rounded-full flex items-center justify-center text-white text-lg hover:cursor transition">
    &#8594;
  </button>

  {/* Testimonial Content */}
  <p className="text-center italic text-sm md:text-base leading-relaxed">
    "Working at Aignosis has been an incredibly fulfilling journey. Every day, I
    get to contribute to a platform that makes a real difference in people’s
    lives. The collaborative environment and the supportive team make it a
    place where I can grow both professionally and personally."
  </p>

  {/* Pink Divider */}
  <div className="w-full h-px bg-pink-400"></div>

  {/* Name */}
  <p className="w-full text-left font-semibold text-sm md:text-base">
    – Rajesh K., AI Engineer
  </p>
</div>




      {/* Call-to-Action Section */}
      <div className="text-center w-full font-[Raleway] mt-[10vw]">
  <p
    className="text-xl font-[Raleway] max-sm:text-[3vw] p-6 rounded-lg"
    style={{
      background:
        "linear-gradient(90deg, rgba(117, 35, 137, 0.5) 0%, #1E0923 50%, rgba(117, 35, 137, 0.04) 100%), linear-gradient(270deg, rgba(117, 35, 137, 0.5) 0%, #1E0923 50%, rgba(117, 35, 137, 0.04) 100%)",
    }}
  >
    Join us and become part of a team that’s not just building a platform but
    shaping  the future of autism care. Your work here truly matters.
  </p>
</div>




    </div>
  );
};

export default Reviews;
