import React from 'react';
import { RiArrowRightDoubleLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
const Banner = ({
  title,
  description,
  hotjar_image,
}: {
  title: string;
  description: [];
  hotjar_image: string;
}) => {
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
    <motion.div className="text-gray-600 body-font">
      <div className="w-full mx-auto flex px-5 py-5 md:py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 pr-0 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 100 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
            className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900"
          >
            {title}
          </motion.div>
          <div className="mb-8 leading-relaxed">
            {description?.map((item: any, index) => {
              return (
                <motion.div
                  variants={variants}
                  initial="open"
                  whileInView="animate"
                  custom={index}
                  key={item.id}
                  className="flex gap-2"
                >
                  <div>
                    <RiArrowRightDoubleLine className="h-8 w-8" />
                  </div>
                  <div className="text-2xl">{item.paragraph}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
        {hotjar_image ? (
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: -20, opacity: 15 }}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={hotjar_image}
            />
          </motion.div>
        ) : (
          ''
        )}
      </div>
    </motion.div>
  );
};

export default Banner;
