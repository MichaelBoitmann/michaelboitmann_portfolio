import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles/style';
import { services } from '../constants/services';
import { fadeIn, textVariant } from '../'utils/motion;

const About = () => {
  return (
    <>
      <motion.div variants={textVariants()}>
        <p className={styles.sectionSbutext}
        >Introductions</p>
        <h2 className={styles.sectionHeadText}
        >Overview.</h2>
      </motion.div>
    </>
  )
}



export default About