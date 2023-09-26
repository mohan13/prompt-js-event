import React from 'react';
import Banner from '@/components/ReusableComponents/banner_1';

const Information = ({ data }: { data: any }) => {
  return (
    <div>
      <Banner
        title="How to use hotjar ?"
        description={data}
        hotjar_image="/assets/dashboard.png"
      />
    </div>
  );
};

export default Information;
