import React from 'react';
import Toolbar from '@/components/Navigation/navitems';
const layout = ({ children }: { children: any }) => {
  return (
    <div className="flex-none md:flex w-full">
      <div>
        <Toolbar />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
