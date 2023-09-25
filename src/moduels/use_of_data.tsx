import React from 'react';
import Banner from '@/components/ReusableComponents/banner_1';
const use_of_data = ({ data }: { data: any }) => {
  return (
    <div>
      <Banner
        title="Use of Data to improve Digital Customer Experience"
        description={data}
        hotjar_image="/assets/Digital-Customer-Experience.webp"
      />
    </div>
  );
};

export default use_of_data;
