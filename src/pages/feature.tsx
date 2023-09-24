import React from 'react';
import Information from '@/moduels/Feature/Feature';
import Features from '@/moduels/Feature/Index';
// import Recording from '@/moduels/Feature/recording';
// import Interviews from '@/moduels/Feature/Interviews';
// import Heatmaps from '@/moduels/Feature/Heatmaps';
// import Feedback from '@/moduels/Feature/Feedback';
// import Slider from 'react-slick';
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
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Information data={data_n_info} />
      </div>
      <Features />
    </div>
  );
};

export default index;
