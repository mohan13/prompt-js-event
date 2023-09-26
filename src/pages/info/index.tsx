import React, { useState } from 'react';
import Data from '@/moduels/what_is_data';
import Information from '@/moduels/what_is_info';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const Index = () => {
  const [show, setShow] = useState(true);
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
      <div className="flex items-center  ">
        <div
          onClick={() => {
            setShow(true);
          }}
          className="text-[#ff8ba7] text-xl p-4 cursor-pointer"
        >
          <FaChevronLeft />
        </div>
        {show ? <Data data={data_n_info} /> : <Information data={info} />}

        <div
          onClick={() => {
            setShow(false);
          }}
          className="text-[#ff8ba7]  text-xl p-4 cursor-pointer"
        >
          <FaChevronRight />
        </div>
      </div>
    </>
  );
};

export default Index;
