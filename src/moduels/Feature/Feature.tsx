import React from 'react';
import Banner from '@/components/ReusableComponents/banner_2';

const Feature = ({ data }: { data: any }) => {
  return (
    <div>
      <Banner
        title="4 core Hotjar features and Why you would use them"
        description={data}
        hotjar_image=""
      />
    </div>
  );
};

export default Feature;
