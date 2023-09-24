import React from 'react';
import Image from 'next/image';
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
    <section className=" body-font">
      <div className="w-full h-1/2 md:h-screen bg-[#faeee7] mx-auto flex px-5 py-5 md:pt-24 md:flex-row flex-col items-center">
        {hotjar_image ? (
          <motion.div
            initial={{ x: -250 }}
            animate={{ x: -20 }}
            className="lg:max-w-lg mx-auto mb-4 lg:w-full md:w-1/2 w-5/6"
          >
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={hotjar_image}
              width={500}
              height={40}
            />
          </motion.div>
        ) : (
          ''
        )}
        <div className="lg:flex-grow lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
          <motion.h1
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            className="title-font sm:text-6xl text-2xl mb-4 font-medium text-[#33272a]"
          >
            {title}
          </motion.h1>
          <div className="mb-8  leading-relaxed text-[#594a4e]">
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
                  <div>
                    <RiArrowRightDoubleLine className="h-8 w-8 text-[#ff8ba7]" />
                  </div>
                  <div className="text-xl md:text-2xl">{item.paragraph}</div>
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
