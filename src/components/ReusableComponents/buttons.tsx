import React from 'react';

const buttons = ({ label }: { label: string }) => {
  return (
    <div className="flex justify-end font-semibold text-[#33272a] bg-[#ff8ba7] hover:bg-[#ffc6c7] hover:text-[#faeee7] transition ease-in-out duration-200 text-xl p-4 cursor-pointer outline-none">
      {label}
    </div>
  );
};

export default buttons;
