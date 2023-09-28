import React from 'react';
import { motion } from 'framer-motion';
import { RiArrowRightDoubleLine } from 'react-icons/ri';
import Two_images from './two_images';

const Slides = ({
  title,
  description,
  image_one,
  image_two,
}: {
  title: string;
  description: any;
  image_one: string;
  image_two: string;
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
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="text-gray-600 body-font rounded-md bg-[#fffffe] "
    >
      <div className="w-full grid grid-cols-2 md:p-5 my-10 items-center">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left items-center ">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 100, y: 0 }}
            className="title-font sm:text-6xl text-2xl mb-4 font-medium text-[#33272a]"
          >
            {title}
          </motion.h1>
          <div>
            {description?.map((item: any, index: number) => {
              return (
                <motion.div
                  variants={variants}
                  initial="open"
                  whileInView="animate"
                  custom={index}
                  key={item.id}
                  className="flex gap-2 mt-2.5 text-[#594a4e] "
                >
                  <div>
                    <RiArrowRightDoubleLine className="h-8 w-8 text-[#ff8ba7]" />
                  </div>
                  <div className="text-xl sm:text-2xl">{item.detail}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <Two_images first_image={image_one} second_image={image_two} />
      </div>
    </motion.div>
  );
};

export default Slides;
