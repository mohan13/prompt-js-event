import React from 'react';
import Banner from '@/components/ReusableComponents/banner_1';
import Two_images from '@/components/ReusableComponents/two_images';
const use_of_data = ({ data }: { data: any }) => {
  return (
    <div>
      <Banner
        title="Use of Data to improve Digital Customer Experience"
        description={data}
        hotjar_image="/assets/Digital-Customer-Experience.webp"
      />
      {/* <Two_images first_image="/assets/useofhotjar.png" second_image="" /> */}
    </div>
  );
};

export default use_of_data;
