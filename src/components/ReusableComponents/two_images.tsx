import React from 'react';
import { motion } from 'framer-motion';
const Two_images = ({
  first_image,
  second_image,
}: {
  first_image: string;
  second_image: string;
}) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ rotate: 0, scale: 1, opacity: 50 }}
      transition={{
        delay: 0.4,
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className="grid grid-cols-1 gap-2 px-4 mt-8 "
    >
      {first_image ? (
        <picture>
          <img
            className="h-auto max-w-full rounded-lg"
            src={first_image}
            alt=""
          />
        </picture>
      ) : (
        ''
      )}
      {second_image ? (
        <picture>
          <img
            className="h-auto max-w-full rounded-lg"
            src={second_image}
            alt=""
          />
        </picture>
      ) : (
        ''
      )}
    </motion.div>
  );
};

export default Two_images;
