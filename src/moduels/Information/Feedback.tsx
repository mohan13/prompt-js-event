import React from 'react';
import Slides from '@/components/ReusableComponents/slides';
import Two_images from '@/components/ReusableComponents/two_images';
const Feedback = () => {
  const paragraph = [
    {
      id: 1,
      detail: 'Two main features feedback widgets and surveys',
    },
    {
      id: 2,
      detail: 'It is a simple five-level emoticon satisfaction rating',
    },
  ];
  return (
    <div>
      <Slides
        title="User Feeback and surveys (to learn what your users think"
        description={paragraph}
      />
      <Two_images
        first_image="/assets/recording.png"
        second_image="/assets/recording.png"
      />
    </div>
  );
};
export default Feedback;
