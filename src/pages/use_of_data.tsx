import React from 'react';
import Usedata from '@/moduels/use_of_data';
const use_of_data = () => {
  const use_data = [
    {
      id: 1,
      paragraph: "Website need to keep track of their customer's perception",
    },
    {
      id: 2,
      paragraph: 'Helps companies fix problems faster',
    },
    {
      id: 3,
      paragraph: 'Making sure user have a smooth and hassle-free journey',
    },
  ];
  return (
    <div>
      <Usedata data={use_data} />
    </div>
  );
};

export default use_of_data;
