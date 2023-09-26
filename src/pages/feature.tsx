import React, { useState } from 'react';
import Information from '@/moduels/Feature/Feature';
import Features from '@/moduels/Feature/Index';
import Buttons from '@/components/ReusableComponents/buttons';
// import Recording from '@/moduels/Feature/recording';
// import Interviews from '@/moduels/Feature/Interviews';
// import Heatmaps from '@/moduels/Feature/Heatmaps';
// import Feedback from '@/moduels/Feature/Feedback';
// import Slider from 'react-slick';
const Index = () => {
  const [next, setNext] = useState(true);
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
    <div className="grid grid-cols-1">
      {next ? (
        <div>
          <Information data={data_n_info} />
        </div>
      ) : (
        <div>
          <Features />
        </div>
      )}
      <div className="fixed inset-y-2/3 right-3">
        {next ? (
          <div onClick={() => setNext(false)}>
            <Buttons label="Next" />
          </div>
        ) : (
          <div onClick={() => setNext(true)}>
            <Buttons label="Back" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
