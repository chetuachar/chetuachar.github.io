import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } }
};

const PageLayout = ({ children, title, isWide }) => {
  React.useEffect(() => {
    if (title) {
      document.title = `${title} | Portfolio`;
    }
  }, [title]);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`container page-content ${isWide ? 'wide-container' : ''}`}
      style={{ padding: '3rem 2rem' }}
    >
      {children}
    </motion.div>
  );
};

export default PageLayout;
