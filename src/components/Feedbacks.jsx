import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-blue-100 rounded-[20px]">
      <div className={`${styles.padding}
      bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p>What others say</p>
          <h2>Testimonials</h2>
        </motion.div>
      </div>
    </div>
  )
}

export default Feedbacks