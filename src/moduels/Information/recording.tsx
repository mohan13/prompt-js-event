import React from 'react';

import Slides from '@/components/ReusableComponents/slides';
import Two_images from '@/components/ReusableComponents/two_images';
export interface Iparagraph {
  id: number;
  detail: string;
}
[];
const recording = () => {
  const paragraph = [
    {
      id: 1,
      detail:
        'Its starts gathering screen recording of individual visits to you site.',
    },
    {
      id: 2,
      detail:
        'Its detect and highlight things like Frustrations (u-turn, inactivity, exits and engagements (clicks,plays, actions) ',
    },
  ];
  return (
    <>
      <Slides
        title="Screen Recordings ( to see actual user interactions"
        description={paragraph}
      />
      <Two_images
        first_image="/assets/recording.png"
        second_image="/assets/recording.png"
      />
    </>
  );
};

export default recording;
