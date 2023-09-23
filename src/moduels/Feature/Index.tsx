import Slides from '@/components/ReusableComponents/slides';
import Two_images from '@/components/ReusableComponents/two_images';
import React from 'react';

interface Ifeatures {
  id: number;
  title: string;
  first_image: string;
  second_image: string;
  paragraph: Iparagraph[];
}
interface Iparagraph {
  id: number;
  detail: string;
}
const Index = () => {
  const features = [
    {
      id: 1,
      title: 'Screen Recordings',
      first_image: '/assets/recordings.png',
      second_image: '/assets/record search.png',
      paragraph: [
        {
          id: 1,
          detail:
            'Its visualize at a glance how people are using your website.',
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
      ],
    },
    {
      id: 2,
      title: 'HeatMaps',
      first_image: '/assets/heatmaps.png',
      second_image: '/assets/heatmap-click.jpg',
      paragraph: [
        {
          id: 1,
          detail:
            'Its visualize at a glance how people are using your website.',
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
      ],
    },
    {
      id: 3,
      title: 'Feedback',
      first_image: '/assets/hotjar-feedback.jpg',
      second_image: '/assets/deedback.webp',

      paragraph: [
        {
          id: 1,
          detail: 'Two main features feedback widgets and surveys',
        },
        {
          id: 2,
          detail: 'It is a simple five-level emoticon satisfaction rating',
        },
      ],
    },
    {
      id: 4,
      title: 'Interview',
      first_image: '',
      second_image: '',
      paragraph: [
        {
          id: 1,
          detail:
            "The Engage feature is the latest addition to Hotjar's offering",
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
      ],
    },
  ];

  return (
    <div>
      {features?.map((item: Ifeatures) => {
        return (
          <div key={item.id}>
            <Slides title={item.title} description={item.paragraph} />
            <Two_images
              first_image={item.first_image}
              second_image={item.second_image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Index;
