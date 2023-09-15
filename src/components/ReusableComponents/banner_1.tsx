import React from 'react';
import { RiArrowRightDoubleLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
const Banner = ({ title, description }: { title: string; description: [] }) => {
  const variants = {
    open: {
      opacity: 0,
      x: -250,
    },
    animate: (index: number) => ({
      opacity: 5,
      x: 0,
      transition: {
        delay: 0.2 * index,
      },
    }),
  };
  return (
    <motion.div animate={{ x: 80 }} className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 100 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
            className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900"
          >
            {title}
          </motion.div>
          <div className="mb-8 text-xl leading-relaxed">
            {description?.map((item: any, index) => {
              return (
                <motion.div
                  variants={variants}
                  initial="open"
                  whileInView="animate"
                  custom={index}
                  key={item.id}
                  className="flex items-center gap-2"
                >
                  <RiArrowRightDoubleLine />
                  <div>{item.paragraph}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ x: -250 }}
          animate={{ x: -20 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/assets/logo.webp"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
