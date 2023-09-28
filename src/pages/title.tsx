import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
const title = () => {
  return (
    <div className="w-full h-screen bg-[#faeee7] mx-auto flex px-5 py-5 md:pt-24 md:flex-row flex-col items-center">
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: -20, opacity: 10 }}
        transition={{ delay: 0.4 }}
        className="mr-auto place-self-center lg:col-span-7"
      >
        <h1 className="hidden md:block max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#ff8ba7]">
          Hotjar:
        </h1>
        <p className="max-w-2xl mb-6 font-light text-[#594a4e] lg:mb-8 text-xl md:text-4xl xl:text-5xl">
          Collect data to Enhance User Experience
        </p>
        <div className="flex justify-end items-center gap-3 mr-10">
          <Image
            className="object-cover w-12 h-12 rounded-full shrink-0"
            src="/assets/mohan.png"
            alt=""
            width={100}
            height={100}
          />
          <div>
            <p className="text-lg font-medium leading-tight text-[#ff8ba7] ">
              Mohan Gurung
            </p>
            <p className="text-sm font-normal text-[#594a4e]">
              Frontend Developer at
              <Link
                href="https://www.skillprompt.com"
                className="text-[#31B991] ml-1"
              >
                Skillprompt
              </Link>
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -250 }}
        animate={{ x: -20 }}
        className="lg:max-w-lg mx-auto mb-4 lg:w-full md:w-1/2 w-5/6"
      >
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src="/assets/logo.webp"
          width={500}
          height={80}
        />
      </motion.div>
    </div>
  );
};

export default title;
