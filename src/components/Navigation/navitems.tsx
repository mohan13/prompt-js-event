import React, { useState } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { FiMenu } from 'react-icons/fi';
import { menu } from '../Constant/menu';
const Navitems = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="border-2 border-black m-2 p-2"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FiMenu className="h-10 w-10" />
      </button>
      {open && (
        <div className="w-64 h-screen z-10 absolute">
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
    </>
  );
};

export default Navitems;
