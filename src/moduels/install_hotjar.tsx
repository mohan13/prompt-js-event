import React from 'react';
import Banner from '@/components/ReusableComponents/banner_1';
import Two_images from '@/components/ReusableComponents/two_images';
const install_hotjar = ({ data }: { data: any }) => {
  return (
    <div>
      <Banner
        title="How to Install Hotjar ?"
        description={data}
        hotjar_image=""
      />
      <Two_images
        first_image="/assets/package.png"
        second_image="/assets/install.png"
      />
    </div>
  );
};

export default install_hotjar;
