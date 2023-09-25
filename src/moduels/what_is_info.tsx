import React from 'react';
import Banner from '@/components/ReusableComponents/banner_1';
const Information = ({ data }: { data: any }) => {
  return (
    <div>
      <Banner
        title="What is Information?"
        description={data}
        hotjar_image="/assets/data-information.jpg"
      />
    </div>
  );
};

export default Information;
