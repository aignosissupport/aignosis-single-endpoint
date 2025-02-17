import React from 'react'
import img9 from "../../assets/clinic/img9.png";
const EndroseCard = () => {
    return (
        <div >
          <div className="w-[350px] bg-[#43284C4D] border border-[#5455694D] p-5 rounded-lg overflow-hidden shadow-lg text-white">
            {/* Image */}
            
              <img
                src={img9} 
                alt="Pixel Perfect"
                className="w-full h-[200px] object-cover"
              />
            
            {/* Content */}
            <div className="p-4 ">
              <p className="text-xs text-gray-400 mb-1">12 January, 2021</p>
              <p className="text-lg font-semibold mb-2">Pixel Perfect</p>
              <p className="text-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
                eros dui. Sed quis tincidunt purus, sit amet sodales arcu. Maecenas
                suscipit magna id viverra euismod. Aenean viverra dui convallis ante
                lobortis laoreet. Sed nec quam enim.
              </p>
              
            </div>
          </div>
        </div>
      );
}

export default EndroseCard
