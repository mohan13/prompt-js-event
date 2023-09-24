import React from 'react';

const title = () => {
  return (
    <section className="">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#ff8ba7]">
            Hotjar:
          </h1>
          <p className="max-w-2xl mb-6 font-light text-[#594a4e] lg:mb-8 text-xl md:text-4xl xl:text-5xl">
            Collect data to Enhance User Experience
          </p>
          <div className="flex justify-end items-center gap-3">
            <img
              className="object-cover w-12 h-12 rounded-full shrink-0"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt=""
            />
            <div>
              <p className="text-lg font-medium leading-tight text-[#ff8ba7] dark:text-white">
                Mohan Gurung
              </p>
              <p className="text-sm font-normal text-[#594a4e]">
                Frontend Developer at Skillprompt
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/assets/logo.webp" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default title;
