import React from 'react';
import Intro from '@/moduels/Intro';
import { topics } from '@/components/Constant/topics';
const index = () => {
  const Introduction = topics.find((item) => item.slug === 'intro');
  if (!Introduction) {
    return <div>Course Not Found</div>;
  }
  return (
    <div>
      <Intro intropage={Introduction} />
    </div>
  );
};

export default index;
