/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
const demo = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className=" w-full px-5 pt-5 md:pt-24  items-center">
        <div className="lg:flex-grow lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
            End of Slides
          </h1>
          <Link
            href="https:insights.hotjar.com/sites/3666730/overview"
            className="text-[#ff8ba7] underline sm:text-4xl text-2xl"
          >
            (let's Go to the Demo)
          </Link>
        </div>
      </div>
    </section>
  );
};

export default demo;
