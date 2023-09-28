import React from 'react';
import Banner from '@/components/ReusableComponents/banner_2';
const Information = ({ data }: { data: any }) => {
  return (
    <div>
      <Banner
        title="What is Data?"
        description={data}
        hotjar_image="/assets/information.webp"
      />
    </div>
  );
};

export default Information;
