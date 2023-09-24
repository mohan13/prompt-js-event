import React from 'react';
import Toolbar from '@/components/Navigation/navitems';
const layout = ({ children }: { children: any }) => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="border-r-8 border-[#ff8ba7]">
        <Toolbar />
      </div>
      <div className="w-full px-4 bg-[#faeee7]">{children}</div>
    </div>
  );
};

export default layout;
