import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightDoubleLine } from 'react-icons/ri';

const Slides = ({
  title,
  description,
}: {
  title: string;
  description: any;
}) => {
  const variants = {
    open: {
      opacity: 0,
    },
    animate: (index: number) => ({
      opacity: 5,
      transition: { delay: 0.2 * index },
    }),
  };
  return (
    <section className="text-gray-600 body-font ">
      <div className=" w-full px-5 pt-5 md:pt-24  items-center">
        <div className="lg:flex-grow lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
            {title}
          </h1>
          <div>
            {description?.map((item: any, index: number) => {
              return (
                <motion.div
                  variants={variants}
                  initial="open"
                  whileInView="animate"
                  custom={index}
                  key={item.id}
                  className="flex gap-2 mt-2.5 "
                >
                  <div>
                    <RiArrowRightDoubleLine className="h-8 w-8" />
                  </div>
                  <div className="text-2xl">{item.detail}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slides;
