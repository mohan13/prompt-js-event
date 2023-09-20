import React from 'react';
import Toolbar from '@/components/Navigation/navitems';
const layout = ({ children }: { children: any }) => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div>
        <Toolbar />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
