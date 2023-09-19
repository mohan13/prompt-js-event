import Banner from '@/components/ReusableComponents/banner_2';
import React from 'react';

const Welcome = ({ intropage }: { intropage: any }) => {
  return (
    <div>
      <Banner title="Hello" description={intropage} />
    </div>
  );
};

export default Welcome;
