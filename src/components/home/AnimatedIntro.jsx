import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedIntro = ({ videoSrc, children }) => {
  const [showContent, setShowContent] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true); // Show website content after 10 seconds
    }, 12000); // Adjust duration to include animation time

    return () => clearTimeout(timeout); // Cleanup
  }, []);

  return (
    <div className="relative h-screen ">
   
        {!playAnimation && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 2, ease: "easeInOut", delay: 10 }}
          className="absolute inset-0 w-full h-full bg-black z-20"
        >
          <video
            src={videoSrc}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
          />
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedIntro;
