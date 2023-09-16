import Banner from '@/components/ReusableComponents/banner_2';
import Two_images from '@/components/ReusableComponents/two_images';
import React from 'react';

const Intro = ({ intropage }: { intropage: any }) => {
  return (
    <div>
      <Banner title={intropage.title} description={intropage.description} />
      <Two_images />
    </div>
  );
};

export default Intro;
