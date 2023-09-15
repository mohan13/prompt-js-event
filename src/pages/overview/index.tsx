import React from 'react';
import Overviewpage from '@/moduels/Overview';
import { topics } from '@/components/Constant/topics';
const index = () => {
  const Overview = topics.find((item) => item.slug === 'overview');
  if (!Overview) {
    return <div>Course Not Found</div>;
  }
  return (
    <div>
      <Overviewpage overview={Overview} />
    </div>
  );
};

export default index;
