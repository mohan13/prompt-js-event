import React from 'react';
import Useofhotjar from '@/moduels/UsedHotjar/use_hotjar';
import Useofimage from '@/moduels/UsedHotjar/images';

const use_of_hotjar = () => {
  const data_n_info = [
    {
      id: 1,
      paragraph: 'Signed up for hotjar and selected your package',
    },
    {
      id: 2,
      paragraph:
        "You'll get access to the hotjar dashboard and all the features available to you",
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
