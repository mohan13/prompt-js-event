import React from 'react';
import Slides from '@/components/ReusableComponents/slides';
import Two_images from '@/components/ReusableComponents/two_images';
const Heatmaps = () => {
  const paragraph = [
    {
      id: 1,
      detail: 'Its visualize at a glance how people are using your website.',
    },
    {
      id: 2,
      detail: 'Its highlights the most and least active areas',
    },
    {
      id: 3,
      detail:
        'Red means busy and blue means less active based on clicks, moves and scrolls.',
    },
  ];
  return (
    <>
      <Slides
        title="Heatmaps (to visualize user behavior)"
        description={paragraph}
      />
      <Two_images
        first_image="/assets/recording.png"
        second_image="/assets/recording.png"
      />
    </>
  );
};
export default Heatmaps;
