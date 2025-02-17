import React from 'react'
import img5 from "../../assets/clinic/img5.png";
const Trusted = () => {
  return (
    <div className='bg-[#1A0C25]   '>
      <div className='flex flex-col '>

        <div className='flex justify-center items-center' >
          <img src={img5} className='w-[100px]' alt="" />
          <h3 className='text-[#F6E8FB] font-raleway text-[48px] md:mr-[20px] max-sm:text-[24px]'>Trusted by Experts in Autism Detection</h3>
        </div>
        <div className='flex  gap-8 flex-col'>
          <div className='fle justify-center items-center mx-auto max-sm:w-full md:w-[800px]'>

            <p className='text-[#F6E8FB] text-center'>Hear how AI.Gnosis has transformed early autism detection for healthcare professionals, improving accuracy and patient care in clinics worldwide.</p>
          </div>
          <div className='flex gap-2'>

            <div className=" flex gap-6 max-sm:flex-col items-center justify-center bg-gradient-radial from-[#1A0C25] to-[#43284C]">
              <div className="md:w-[40vw] w-full p-6  rounded-xl shadow-lg text-white" style={{
                background: "radial-gradient(168.91% 101.44% at 50% 39.02%, #1A0C25 20%, #43284C 100%)",
              }}>
                <p className="text-lg leading-relaxed mb-4 text-[#F6E8FB] font-raleway">
                "As a pediatrician with over 40 years of experience, I believe early detection of autism and developmental disorders is critical. This test is a groundbreaking tool that allows us to detect early signs with high accuracy. It empowers parents to take action sooner, improving outcomes for children."
                </p>
                <hr className="border-t border-[#811F67] my-4" />
                <div className="mt-4 flex justify-between">
                  <div><p className="font-semibold text-lg">Dr. V Ajay kumar</p>
                    <p className="text-sm text-gray-400"> Pediatrician & Developmental Expert</p>
                  </div>
                </div>
              </div>

              <div className="md:w-[40vw] w-full  p-6  rounded-xl shadow-lg text-white" style={{
                background: "radial-gradient(168.91% 101.44% at 50% 39.02%, #1A0C25 20%, #43284C 100%)",
              }}>
                <p className="text-lg leading-relaxed mb-4 text-[#F6E8FB] font-raleway">
                "The early autism detection test is a significant step forward in pediatric care. It offers a non-invasive, cost-effective, and efficient way to screen children for neurodevelopmental disorders. I wholeheartedly support this initiative, as it provides essential data for timely intervention."
                </p>
                <hr className="border-t border-[#811F67] my-4" />
                <div className="mt-4 flex justify-between">
                  <div><p className="font-semibold text-lg">Dr. Ramesh Agarwal</p>
                    <p className="text-sm text-gray-400">Head of Child Development, AIIMS Delhi</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trusted
