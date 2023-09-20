import React from 'react';

const Two_images = ({
  first_image,
  second_image,
}: {
  first_image: string;
  second_image: string;
}) => {
  return (
    <div className="grid grid-cols-2 gap-2 mx-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src={first_image}
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src={second_image}
          alt=""
        />
      </div>
      ;
    </div>
  );
};

export default Two_images;
