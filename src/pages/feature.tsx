import React from 'react';
import Information from '@/moduels/Information';
const index = () => {
  const data_n_info = [
    {
      id: 1,
      paragraph: 'Screen recordings',
    },
    {
      id: 2,
      paragraph: 'Heatmaps',
    },
    {
      id: 3,
      paragraph: 'feeback and surveys',
    },
    {
      id: 4,
      paragraph: 'User interviews',
    },
  ];
  return <Information data={data_n_info} />;
};

export default index;
