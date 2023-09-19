import React from 'react';

import { motion } from 'framer-motion';
import { RiArrowRightDoubleLine } from 'react-icons/ri';
const Banner = ({
  title,
  description,
  hotjar_image,
}: {
  title: string;
  hotjar_image: string;
  description: [];
}) => {
  const variants = {
    open: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 5,
      y: 0,
      transition: { delay: 0.2 * index },
    }),
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container  mx-auto grid grid-cols-1 md:grid-cols-2 px-5 py-24  items-center">
        {hotjar_image ? (
          <motion.div
            initial={{ x: -250 }}
            animate={{ x: -20 }}
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
        <div className="lg:flex-grow lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <motion.h1
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900"
          >
            {title}
          </motion.h1>
          <div className="mb-8 text-xl leading-relaxed">
            {description?.map((item: any, index) => {
              return (
                <motion.div
                  variants={variants}
                  initial="open"
                  whileInView="animate"
                  custom={index}
                  key={item.id}
                  className="flex gap-2 "
                >
                  <RiArrowRightDoubleLine />
                  <div>{item.paragraph}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
