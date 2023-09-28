import React, { useState } from 'react';
import Data from '@/moduels/what_is_data';
import Information from '@/moduels/what_is_info';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const Index = () => {
  const [show, setShow] = useState(true);

  const data_n_info = [
    {
      id: 1,
      paragraph: 'Came from the Latin word datum, meaning “something given.”',
    },
    {
      id: 2,
      paragraph: ' Unorganized "facts and figure"',
    },

    {
      id: 4,
      paragraph:
        'It Can be Number, symbol, character, word, codes, graph, etc.',
    },
    {
      id: 5,
      paragraph: 'For example: 1, A, *',
    },
  ];
  const info = [
    {
      id: 1,
      paragraph:
        'The word comes form the Latin word information, meaning “formation or conception”',
    },
    {
      id: 2,
      paragraph: 'Defined as “news or knowledge received or given"',
    },
    {
      id: 3,
      paragraph:
        'A results when you have processed, interpreted, and organized facts.',
    },
  ];

  return (
    <>
      <div className="flex items-center ">
        <div
          onClick={() => {
            setShow(true);
          }}
          className="text-[#ff8ba7] text-xl p-4 cursor-pointer"
        >
          <FaChevronLeft className="h-7 w-7" />
        </div>
        {show ? <Data data={data_n_info} /> : <Information data={info} />}

        <div
          onClick={() => {
            setShow(false);
          }}
          className="text-[#ff8ba7] text-xl  cursor-pointer"
        >
          <FaChevronRight className="h-7 w-7" />
        </div>
      </div>
    </>
  );
};

export default Index;
