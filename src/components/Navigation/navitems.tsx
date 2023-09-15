import React from 'react';
import Link from 'next/link';

import { menu } from '../Constant/menu';
const Navitems = () => {
  return (
    <div className=" w-64 h-screen ">
      <div className="overflow-y-auto py-4 px-3 h-full bg-white border-r border-gray-200 ">
        <div className="space-y-2">
          {menu?.map((item) => {
            return (
              <div key={item.id}>
                <Link
                  href={item.url}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100  group"
                >
                  <div className="ml-3">{item.title}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navitems;
