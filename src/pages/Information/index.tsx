import React from 'react';
import Information from '@/moduels/Information/Information';
const index = () => {
  const data_n_info = [
    {
      id: 1,
      paragraph: 'It is defined as “ news or knowledge received or given',
    },
    {
      id: 2,
      paragraph:
        'It is what results when you have processed, interpreted, and organized facts.',
    },
    {
      id: 3,
      paragraph:
        'The word comes form the Latin word information, meaning “formation or conception”',
    },
  ];
  return <Information data={data_n_info} />;
};

export default index;
