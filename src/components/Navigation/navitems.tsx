import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaStream, FaTimes } from 'react-icons/fa';
import { menu } from '../Constant/menu';

const Navitems = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex md:hidden justify-between items-center bg-[#faeee7] w-full px-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">
          PrompJS
        </span>

        <button
          className="block md:hidden first-letter:border-2 border-[#33272a] my-2 py-2"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <div className="h-8 w-8 transition delay-500">
              <FaTimes className="w-full h-full" />
            </div>
          ) : (
            <div className="h-8 w-8 transition delay-500 ease-in-out">
              <FaStream className=" h-full w-full " />
            </div>
          )}
        </button>
      </div>
      {open && (
        <div className="w-64 h-screen z-10 absolute ">
          <div className="overflow-y-auto flex py-4 px-3 h-full bg-white border-r border-gray-200 ">
            <div className="space-y-2">
              {menu?.map((item) => {
                return (
                  <div key={item.id}>
                    <Link
                      onClick={() => setOpen(false)}
                      href={item.url}
                      className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group ${
                        router.pathname === item.url ? 'bg-gray-100' : ''
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
      <div className="w-64 h-screen mx-auto hidden md:block bg-[#faeee7] ">
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
    </>
  );
};

export default Navitems;
