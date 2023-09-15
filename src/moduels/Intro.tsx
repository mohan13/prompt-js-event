import Banner from '@/components/ReusableComponents/banner_2';
import React from 'react';

const Intro = ({ intropage }: { intropage: any }) => {
  return (
    <div>
      <Banner title={intropage.title} description={intropage.description} />
    </div>
  );
};

export default Intro;
