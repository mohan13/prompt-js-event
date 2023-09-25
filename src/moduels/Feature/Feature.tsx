import React from 'react';
import Banner from '@/components/ReusableComponents/banner_2';

const Feature = ({ data }: { data: any }) => {
  return (
    <div className="w-1/3 fixed">
      <Banner
        title="Hotjar features and why you would use them?"
        description={data}
        hotjar_image=""
      />
    </div>
  );
};

export default Feature;
