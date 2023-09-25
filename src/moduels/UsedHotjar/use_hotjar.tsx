import React from 'react';
import Banner from '@/components/ReusableComponents/banner_1';
import Two_images from '@/components/ReusableComponents/two_images';
const Information = ({ data }: { data: any }) => {
  return (
    <div>
      <Banner title="How to use hotjar ?" description={data} hotjar_image="" />
      <Two_images first_image="/assets/dashboard.png" second_image="" />
    </div>
  );
};

export default Information;
