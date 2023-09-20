import React from 'react';
import Slides from '@/components/ReusableComponents/slides';
import Two_images from '@/components/ReusableComponents/two_images';
const Survey = () => {
  const paragraph = [
    {
      id: 1,
      detail: "The Engage feature is the latest addition to Hotjar's offering",
    },
    {
      id: 2,
      detail:
        'It aims to connect you directly with people who use your website or product',
    },
    {
      id: 3,
      detail:
        "You're more likely to use this feature if you're using Hotjar to track how people are using a web-based product (like a CRM, for example) than a website",
    },
  ];
  return (
    <>
      <Slides
        title="User Interviews (to engage with your users directly"
        description={paragraph}
      />
    </>
  );
};
export default Survey;
