import React from 'react';
import Toolbar from '@/components/Navigation/navitems';

const layout = ({ children }: { children: any }) => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div>
        <Toolbar />
      </div>
      <div className=" px-4 bg-[#faeee7]">{children}</div>
    </div>
  );
};

export default layout;
