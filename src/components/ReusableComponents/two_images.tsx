import React from 'react';

const Two_images = ({
  first_image,
  second_image,
}: {
  first_image: string;
  second_image: string;
}) => {
  return (
    <div className="grid grid-cols-1 gap-2 px-4 mt-8 ">
      {first_image ? (
        <picture>
          <img
            className="h-auto max-w-full rounded-lg"
            src={first_image}
            alt=""
          />
        </picture>
      ) : (
        ''
      )}
      {second_image ? (
        <picture>
          <img
            className="h-auto max-w-full rounded-lg"
            src={second_image}
            alt=""
          />
        </picture>
      ) : (
        ''
      )}
    </div>
  );
};

export default Two_images;
