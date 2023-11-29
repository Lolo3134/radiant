/* eslint-disable max-len */
import React from 'react';

import { CustomArrowProps } from 'react-slick';

export const SamplePrevArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <button
      aria-label="prev slide"
      className="prevArrow"
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
          d="M0 3.00001L5 5.88676L5 0.113254L0 3.00001ZM64 2.5L4.5 2.50001L4.5 3.50001L64 3.5L64 2.5Z"
          fill="black"
          id="Arrow 3"
        />
      </svg>

    </button>
  );
};
