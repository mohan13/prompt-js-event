import React from 'react';
import Banner from '@/components/ReusableComponents/banner_1';
const Information = ({ data }: { data: any }) => {
  return (
    <div>
      <Banner
        title="What is Data ?"
        description={data}
        hotjar_image="/assets/information.webp"
      />
    </div>
  );
};

export default Information;
