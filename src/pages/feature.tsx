import React from 'react';
import Information from '@/moduels/Information/Information';
import Recording from '@/moduels/Information/recording';
import Interviews from '@/moduels/Information/Interviews';
import Heatmaps from '@/moduels/Information/Heatmaps';
import Feedback from '@/moduels/Information/Feedback';
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
  return (
    <>
      <Information data={data_n_info} />
      <Recording />
      <Feedback />
      <Heatmaps />
      <Interviews />
    </>
  );
};

export default index;
