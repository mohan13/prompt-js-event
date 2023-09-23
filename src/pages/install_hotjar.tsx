import React from 'react';
import Installhotjar from '@/moduels/install_hotjar';
const install_hotjar = () => {
  const install_hotjar = [
    {
      id: 1,
      paragraph: 'Choose a Product Package',
    },
    {
      id: 2,
      paragraph: 'Add Tracking Code',
    },
    {
      id: 3,
      paragraph: 'Verify Installation',
    },
  ];
  return (
    <div>
      <Installhotjar data={install_hotjar} />
    </div>
  );
};

export default install_hotjar;
