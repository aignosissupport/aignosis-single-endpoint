import React from 'react'
import img1 from "../../assets/image.png";
import img2 from "../../assets/Featured.png";
import forward from "../../assets/forward.png";

const HowitWorks = () => {
    const Divider = ({ title }) => (
        <div className="flex flex-row justify-center items-center space-x-4 mb-3 mt-10">
            <span
                className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                style={{
                    background:
                        'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                }}
            ></span>
            <h4 className="text-[18px] text-[#F1C6FE] font-medium max-sm:text-sm">
                {title}
            </h4>
            <span
                className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                style={{
                    background:
                        'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                }}
            ></span>
        </div>
    );

    return (
        <div>
            <div className="hidden md:block pt-8">
                {/* Divider Section */}
                <Divider title="Advantages" />
                <h5 className="text-2xl 2xl:text-5xl font-montserrat w-full text-center md:text-3xl tracking-tight font-semibold text-[#F6E8FB] max-sm:text-center">
                    How it works
                </h5>
                <div className="w-full relative font-montserrat h-full p-5 px-[5vw]">
                    <div className="w-full flex items-center justify-start h-[20vw]">
                        <div className="w-[13vw] p-2 h-auto">
                            <span className='text-[20px]'>Step 1</span>
                            <p className='text-[12px] text-[#CACED9]'>Book Your Test Schedule the screening online or at a center.</p>
                        </div>
                        <div className="bg-[#D9D9D947]  relative w-[16vw] rounded-r-2xl h-[15vw]">
                            <img src='https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/aboutus.png' className='object-cover relative  rounded-r-2xl w-full h-full ' alt="" srcset="" loading='lazy'/>
                            <div className="absolute -left-16 -top-4">
                                <img src={forward} className='object-contain scale-[.6]' alt="" srcset=""  loading='lazy'/>

                            </div>
                        </div>
                        <div className="w-[13vw] ml-5 p-2 h-auto">
                            <span className='text-[20px]'> Step 2</span>
                            <p className='text-[12px] text-[#CACED9]'>
                            Set Up the Environment Create a calm, distraction-free space.
                            </p>
                        </div>
                        <div className="bg-[#D9D9D947] relative w-[16vw] rounded-r-2xl h-[15vw]">
                            <img src='https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/2.jpg' className='object-cover relative  rounded-r-2xl w-full h-full ' alt="" srcset="" loading='lazy'/>
                            <div className="absolute -left-16 -top-4">
                                <img src={forward} className='object-contain scale-[.6]' alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-start h-[15vw]">
                        <div className="bg-[#D9D9D947] relative w-[16vw] rounded-r-2xl h-[15vw]">
                            <img src='https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/5.jpg' loading='lazy' className='object-cover relative  rounded-r-2xl w-full h-full ' alt="" srcset="" />
                            <div className="absolute rotate-180 -right-16 -bottom-4">
                                <img src={forward} className='object-contain scale-[.6]' alt="" srcset="" loading='lazy' />
                            </div>
                        </div>
                        <div className="w-[13vw] ml-5  p-2 h-auto">
                            <span className='text-[20px]'>Step 5</span>
                            <p className='text-[12px] text-[#CACED9]'>Receive Insights Get a detailed report with recommendations and free consultation.</p>
                        </div>
                        <div className="bg-[#D9D9D947] relative w-[16vw] rounded-r-2xl h-[15vw]">
                            <img src='https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/4.jpg' className='object-cover  rounded-r-2xl relative w-full h-full ' alt="" srcset="" loading='lazy'/>
                            <div className="absolute rotate-180 -right-16 -bottom-4">
                                <img src={forward} className='object-contain scale-[.6]' alt="" srcset="" loading='lazy' />
                            </div>
                        </div>
                        <div className="w-[13vw] p-2 ml-5 h-auto">
                            <span className='text-[20px]'>Step 4 </span>
                            <p className='text-[12px] text-[#CACED9]'>AI Analysis Let our AI analyze your child’s responses.</p>
                        </div>
                    </div>
                    <div className="w-full absolute top-[10vw] right-12 flex items-center justify-end h-[20vw]">
                        <div className="w-[13vw] p-2 h-auto">
                            <span className='text-[20px]'>  Step 3</span>
                            <p className='text-[12px] text-[#CACED9]'>

                            Run the Screening Follow simple steps to start the test.
                            </p>
                        </div>
                        <div className="bg-[#D9D9D947] relative w-[16vw] rounded-r-2xl h-[20vw]">
                            <img src='https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/3.jpg' loading='lazy' className='object-cover relative  rounded-r-2xl w-full h-full ' alt="" srcset="" />
                            <div className="absolute -left-16 -top-4">
                                <img src={forward} loading='lazy' className='object-contain scale-[.6]' alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="pt-8 md:hidden">
                {/* Divider Section */}
                <Divider title="Advantages" />
                <h5 className="text-xl font-montserrat text-center tracking-tight font-semibold text-[#F6E8FB]">
                    How it works
                </h5>
                <div className="w-full relative font-montserrat h-full p-5">
                    <div className="w-full flex flex-col items-center space-y-6">
                        {/* Step 1 */}
                        <div className="w-full flex flex-col items-center space-y-2">
                            <div className="w-full text-center">
                                <span className="text-[16px]">Step 1</span>
                                <p className="text-[12px] text-[#CACED9]">Book Your Test Schedule the screening online or at a center.</p>
                            </div>
                            <div className="bg-[#D9D9D947] overflow-hidden relative w-full rounded-2xl h-32">
                                <img className='z-0 absolute inset-0' src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/aboutus.png" alt="" srcset="" />
                                <div className="absolute z-10 -left-4 -top-4">
                                    <img src={forward} className="object-contain scale-[.6]" alt="" />
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="w-full flex flex-col items-center space-y-2">

                            <div className="w-full text-center">
                                <span className="text-[16px]">Step 2</span>
                                <p className="text-[12px] text-[#CACED9]">Set Up the Environment Create a calm, distraction-free space.</p>
                            </div>
                            <div className="bg-[#D9D9D947] overflow-hidden relative w-full rounded-2xl h-32">
                                <img className='z-0 absolute inset-0' src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/2.jpg" alt="" srcset="" />
                                <div className="absolute rotate-180 -right-4 -bottom-4">
                                    <img src={forward} className="object-contain scale-[.6]" alt="" />
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="w-full flex flex-col items-center space-y-2">
                            <div className="w-full text-center">
                                <span className="text-[16px]">Step 3</span>
                                <p className="text-[12px] text-[#CACED9]">Run the Screening Follow simple steps to start the test.</p>
                            </div>
                            <div className="bg-[#D9D9D947] overflow-hidden relative w-full rounded-2xl h-32">
                                <img className='z-0 absolute inset-0' src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/3.jpg" alt="" srcset="" />

                                <div className="absolute -left-4 -top-4">
                                    <img src={forward} className="object-contain scale-[.6]" alt="" />
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="w-full flex flex-col items-center space-y-2">
                            <div className="w-full text-center">
                                <span className="text-[16px]">Step 4</span>
                                <p className="text-[12px] text-[#CACED9]">AI Analysis Let our AI analyze your child’s responses.</p>
                            </div>
                            <div className="bg-[#D9D9D947] overflow-hidden relative w-full rounded-2xl h-32">
                                <img className='z-0 absolute inset-0' src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/4.jpg" alt="" srcset="" />

                                <div className="absolute rotate-180 -right-4 -bottom-4">
                                    <img src={forward} className="object-contain scale-[.6]" alt="" />
                                </div>
                            </div>

                        </div>

                        {/* Step 5 */}
                        <div className="w-full flex flex-col items-center space-y-2">
                            <div className="w-full text-center">
                                <span className="text-[16px]">Step 5</span>
                                <p className="text-[12px] text-[#CACED9]">Receive Insights Get a detailed report with recommendations and free consultation.</p>
                            </div>
                            <div className="bg-[#D9D9D947] overflow-hidden relative w-full rounded-2xl h-32">
                                <img className='z-0 absolute inset-0' src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/5.jpg" alt="" srcset="" />

                                <div className="absolute -left-4 -top-4">
                                    <img src={forward} className="object-contain scale-[.6]" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HowitWorks