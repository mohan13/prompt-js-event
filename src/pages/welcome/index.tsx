import React from 'react';
import Welcome from '@/moduels/Welcome/Welcome';

const index = () => {
  const Introduction = [
    {
      id: 1,
      paragraph: 'He there',
    },
    {
      id: 2,
      paragraph: 'I am a Frontend Web Devloper',
    },
    {
      id: 3,
      paragraph: 'I am currently working on Skillprompt as Frontend Developer',
    },
  ];

  return (
    <div>
      <Welcome intropage={Introduction} />
    </div>
  );
};

export default index;
