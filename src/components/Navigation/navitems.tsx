import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaStream, FaTimes } from 'react-icons/fa';
import { menu } from '../Constant/menu';
import Footer from './footer';
const Navitems = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex md:hidden justify-between items-center bg-[#fffffe] w-full px-4">
        <span className="self-center flex text-3xl font-semibold whitespace-nowrap text-[#33272a]">
          Prompt<div className=" text-[#ff8ba7] text-4xl">JS</div>
        </span>

        <button
          className="block md:hidden my-2 py-2"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="h-8 w-8 transition delay-500">
            {open ? (
              <FaTimes className="w-full h-full text-[#ff8ba7]" />
            ) : (
              <FaStream className="h-full w-full text-[#ff8ba7] " />
            )}
          </div>
        </button>
      </div>
      {open && (
        <div className="w-full flex flex-col items-center h-screen absolute z-10 bg-[#fffffe] ">
          <div className="overflow-y-auto flex py-4 px-3   ">
            <div className="space-y-2">
              {menu?.map((item) => {
                return (
                  <div key={item.id}>
                    <Link
                      onClick={() => setOpen(false)}
                      href={item.url}
                      className={`flex items-center p-2 text-base font-normal text-[#33272a] rounded-lg hover:bg-[#ffc6c7] group ${
                        router.pathname === item.url ? 'bg-[#ffc6c7]' : ''
                      }`}
                    >
                      <div className="ml-3">{item.title}</div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div className="w-64 h-full  flex-col justify-between mx-auto hidden md:flex border-r-4 bg-[#faeee7] ">
        <div className="overflow-y-auto flex py-4 px-3">
          <div className="space-y-2 ">
            <span className=" self-center flex gap-1 text-4xl mb-4 font-semibold whitespace-nowrap text-[#33272a]">
              Prompt<div className="text-[#ff8ba7] ">JS</div>
            </span>
            {menu?.map((item) => {
              return (
                <div key={item.id}>
                  <Link
                    onClick={() => setOpen(false)}
                    href={item.url}
                    className={`flex items-center p-2 text-base font-normal text-[#33272a] transition ease-in-out duration-150 rounded-lg hover:bg-[#ffc6c7] group ${
                      router.pathname === item.url ? 'bg-[#ffc6c7]' : ''
                    }`}
                  >
                    <div className="ml-3">{item.title}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Navitems;
