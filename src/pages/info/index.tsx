import React from 'react';
import Data from '@/moduels/what_is_data';
import Information from '@/moduels/what_is_info';
const index = () => {
  const data_n_info = [
    {
      id: 1,
      paragraph:
        'It comes from the Latin word datum, meaning “something given.”',
    },
    {
      id: 2,
      paragraph: ' Unorganized "facts and figure"',
    },

    {
      id: 4,
      paragraph: 'It Can be Number, symbol, character, word, codes, graph, etc',
    },
    {
      id: 5,
      paragraph: 'For example: 1, A, *',
    },
  ];
  const info = [
    {
      id: 1,
      paragraph: ' Defined as “ news or knowledge received or given',
    },
    {
      id: 2,
      paragraph:
        'A results when you have processed, interpreted, and organized facts.',
    },
    {
      id: 3,
      paragraph:
        'The word comes form the Latin word information, meaning “formation or conception”',
    },
  ];
  return (
    <>
      <Data data={data_n_info} />
      <Information data={info} />
    </>
  );
};

export default index;
