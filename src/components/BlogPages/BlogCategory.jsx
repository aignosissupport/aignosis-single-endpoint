import React from 'react';
import b1 from './baby1.png';
import b2 from './baby2.png';
import b3 from './baby3.png';

const BlogCategory = () => {
  return (
    <section className="min-h-screen mt-6 px-[4vw] lg:px-[12vw]">
      {/* Mobile View */}
      <div className="lg:hidden">
        <div className="bg-[#2A183885] border border-[#9C00AD4D] p-4 rounded-lg">
          {/* Top Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-white font-bold">Category</h2>
            <a href="#" className="text-purple-400 text-lg underline">
              More-&gt;
            </a>
          </div>

          {/* Cards for Mobile */}
          <div className="flex flex-col gap-4">
            <div className="bg-transparent text-black p-4 rounded-lg border-2 border-[#9C00AD4D]">
              <img
                src={b1}
                alt="Inclusive Workplace"
                className="w-full h-[40vw] object-cover rounded-md"
              />
              <h3 className="font-bold text-white text-lg mt-4">
                Autism in the Workplace: How to Create an Inclusive Environment
              </h3>
              <span className="text-lg text-pink-600 font-semibold mt-2">Divya Gowda</span>
              <span className="text-white"> &bull; a min ago</span>
              <p className="text-white mt-2">
                Discuss ways employers and colleagues can foster a supportive, inclusive work
                environment for autistic individuals.
              </p>
            </div>
            <div className="bg-transparent text-black p-4 rounded-lg border-2 border-[#9C00AD4D]">
              <img
                src={b2}
                alt="Resources for Parents"
                className="w-full h-[40vw] object-cover rounded-md"
              />
              <h3 className="font-bold text-white text-lg mt-4">
                Top Resources for Parents of Autistic Children
              </h3>
              <span className="text-lg text-pink-600 font-semibold mt-2">Nitya</span>
              <span className="text-white"> &bull; a min ago</span>
              <p className="text-white mt-2">
                Compile a list of resources, from support groups and educational programs to
                online communities and helpful books.
              </p>
            </div>
            <div className="bg-transparent text-black p-4 rounded-lg border-2 border-[#9C00AD4D]">
              <img
                src={b3}
                alt="Managing Sensory Overload"
                className="w-full h-[40vw] object-cover rounded-md"
              />
              <h3 className="font-bold text-white text-lg mt-4">
                Tips for Managing Sensory Overload
              </h3>
              <span className="text-lg text-pink-600 font-semibold mt-2">Ganesh Patil</span>
              <span className="text-white"> &bull; a min ago</span>
              <p className="text-white mt-2">
                Explore how sensory processing issues affect autistic people and share strategies
                to manage sensory overload.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="bg-[#2A183885] border border-[#9C00AD4D] min-h-screen p-6 rounded-lg">
          {/* Top Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl text-white font-bold">Category</h2>
            <a href="#" className="text-purple-400 text-lg underline">
              More-&gt;
            </a>
          </div>

          {/* Cards for Desktop */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 mb-6 lg:mb-0">
              <div className="bg-transparent text-black p-4 rounded-lg border-2 border-[#9C00AD4D]">
                <img
                  src={b1}
                  alt="Inclusive Workplace"
                  className="w-full h-[33vw] object-cover rounded-md"
                />
                <h3 className="font-bold text-white text-lg mt-4">
                  Autism in the Workplace: How to Create an Inclusive Environment
                </h3>
                <span className="text-lg text-pink-600 font-semibold mt-2">Divya Gowda</span>
                <span className="text-white"> &bull; a min ago</span>
                <p className="text-white mt-2">
                  Discuss ways employers and colleagues can foster a supportive, inclusive work
                  environment for autistic individuals.
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="bg-transparent text-black p-4 rounded-lg border-2 border-[#9C00AD4D]">
                <img
                  src={b2}
                  alt="Resources for Parents"
                  className="w-full h-[14vw] object-cover rounded-md"
                />
                <h3 className="font-bold text-white text-md mt-4">
                  Top Resources for Parents of Autistic Children
                </h3>
                <span className="text-lg text-pink-600 font-semibold mt-2">Nitya</span>
                <span className="text-white"> &bull; a min ago</span>
                <p className="text-white mt-2">
                  Compile a list of resources for parents navigating the autism journey.
                </p>
              </div>
              <div className="bg-transparent text-black p-4 rounded-lg border-2 border-[#9C00AD4D]">
                <img
                  src={b3}
                  alt="Managing Sensory Overload"
                  className="w-full h-[14vw] object-cover rounded-md"
                />
                <h3 className="font-bold text-white text-md mt-4">
                  Tips for Managing Sensory Overload
                </h3>
                <span className="text-lg text-pink-600 font-semibold mt-2">Ganesh Patil</span>
                <span className="text-white"> &bull; a min ago</span>
                <p className="text-white mt-2">
                  Explore how sensory processing issues affect autistic people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCategory;
