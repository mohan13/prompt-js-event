import React from 'react';
import Banner from '@/components/ReusableComponents/banner_1';
const Overview = ({ overview }: { overview: any }) => {
  return (
    <div>
      <Banner title={overview.title} description={overview.description} />
    </div>
  );
};

export default Overview;
