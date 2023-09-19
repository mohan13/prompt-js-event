import React from 'react';
import Banner from '@/components/ReusableComponents/banner_2';
const Information = ({ data }: { data: any }) => {
  return (
    <div>
      <Banner title="What is Information" description={data} />
    </div>
  );
};

export default Information;
