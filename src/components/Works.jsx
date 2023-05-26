import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets/github';
import {  SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const Works = () => {
  return (
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        My Work
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Projects.
      </h2>
  </motion.div>
  )
}

export default SectionWrapper(Works, "");