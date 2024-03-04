import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimHeading1 = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  
  const textVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  return (
    <div ref={ref}>
      <motion.p
        initial="hidden"
        animate={controls}
        variants={textVariants}
        transition={{ duration: 0.5 }}
      >
      {children}
      </motion.p>
    </div>
  );
};

export default AnimHeading1;
