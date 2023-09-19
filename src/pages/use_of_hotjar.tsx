import React from 'react';
import Useofhotjar from '@/moduels/UsedHotjar/use_hotjar';
import Useofimage from '@/moduels/UsedHotjar/images';

const use_of_hotjar = () => {
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
  return (
    <>
      <Useofhotjar data={data_n_info} />
      <Useofimage />
    </>
  );
};

export default use_of_hotjar;
