/* eslint-disable max-len */
import React from 'react';

import { CustomArrowProps } from 'react-slick';

export const SampleNextArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <button
      aria-label="next slide"
      className="nextArrow"
      type="button"
      onClick={onClick}
    >
      <svg
        fill="none"
        height="6"
        viewBox="0 0 64 6"
        width="64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M64 3.00001L59 0.113259L59 5.88676L64 3.00001ZM-8.74228e-08 3.5L59.5 3.50001L59.5 2.50001L8.74228e-08 2.5L-8.74228e-08 3.5Z"
          fill="black"
          id="Arrow 4"
        />
      </svg>
    </button>
  );
};
