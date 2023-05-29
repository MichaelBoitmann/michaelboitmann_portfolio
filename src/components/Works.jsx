import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import {  SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div>
      test
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "");