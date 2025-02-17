import React from 'react';
import log1 from './log1.png'
import log2 from './log2.png'
import log3 from './log3.png'
import log4 from './log4.png'
import log5 from './log5.png'

const Benefits = () => {
  return (
    <section className="bg-[#1A0C25] h-screen max-sm:h-full">
    <div className="text-center mb-12">
      {/* Gradient Pink Lines */}
      <div className="flex items-center justify-center gap-4">
        <div className="h-1 w-20 bg-gradient-to-l max-sm:mt-[4vw] from-pink-500 to-transparent rounded-full"></div>
        <span className="text-white font-semibold max-sm:mt-[4vw] tracking-widest">Benefits</span>
        <div className="h-1 w-20 bg-gradient-to-r max-sm:mt-[4vw] from-pink-500 to-transparent rounded-full"></div>
      </div>
  
      {/* Title */}
      <h2 className="text-3xl font-bold text-white max-sm:mt-[1vw] mt-4">Employee Benefits</h2>
    </div>

      <div className="px-4 ">
        {/* First Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 m">
          {/* Benefit 1 */}
          <div className="w-64 h-48 bg-[radial-gradient(circle,_#1A0C25_20%,_#43284C_100%)] rounded-lg flex flex-col items-center justify-center shadow-lg">
            <div className="w-16 h-16  flex items-center justify-center">
              {/* Placeholder for Image */}
              <img src={log1} alt='pic'/>
            </div>
            <h3 className="mt-4 text-md text-white font-semibold">Comprehensive Health Coverage</h3>
          </div>

          {/* Benefit 2 */}
          <div className="w-64 h-48 bg-[radial-gradient(circle,_#1A0C25_20%,_#43284C_100%)] rounded-lg flex flex-col items-center justify-center shadow-lg">
            <div className="w-16 h-16  flex items-center justify-center">
              {/* Placeholder for Image */}
              <img src={log2} alt='pic'/>
            </div>
            <h3 className="mt-4 text-md text-white font-semibold">Flexible Work Environment</h3>
          </div>

          {/* Benefit 3 */}
          <div className="w-64 h-48 bg-[radial-gradient(circle,_#1A0C25_20%,_#43284C_100%)] rounded-lg flex flex-col items-center justify-center shadow-lg">
            <div className="w-16 h-16  flex items-center justify-center">
              {/* Placeholder for Image */}
              <img src={log3} alt='pic'/>
            </div>
            <h3 className="mt-4 text-md text-white font-semibold">Professional Development</h3>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Benefit 4 */}
          <div className="w-64 h-48 bg-[radial-gradient(circle,_#1A0C25_20%,_#43284C_100%)] rounded-lg flex flex-col items-center justify-center shadow-lg">
            <div className="w-16 h-16  flex items-center justify-center">
              {/* Placeholder for Image */}
              <img src={log4} alt='pic'/>
            </div>
            <h3 className="mt-4 text-md text-white font-semibold">Competitive Compensation</h3>
          </div>

          {/* Benefit 5 */}
          <div className="w-64 h-48 bg-[radial-gradient(circle,_#1A0C25_20%,_#43284C_100%)] rounded-lg flex flex-col items-center justify-center shadow-lg">
            <div className="w-16 h-16  flex items-center justify-center">
              {/* Placeholder for Image */}
              <img src={log5} alt='pic' />
            </div>
            <h3 className="mt-4 text-md text-white font-semibold">Paid Time Off</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
