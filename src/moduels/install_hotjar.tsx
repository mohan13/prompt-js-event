import React from 'react';
import Banner from '@/components/ReusableComponents/banner_1';
const install_hotjar = ({ data }: { data: any }) => {
  return (
    <div>
      <Banner
        title="How to Install Hotjar"
        description={data}
        hotjar_image=""
      />
    </div>
  );
};

export default install_hotjar;
