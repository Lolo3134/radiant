import React from 'react';

import Slider, { Settings } from 'react-slick';

import './WorksSlider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLocation } from 'react-router-dom';

import slide1 from '../../../Assets/image/image12.webp';
import slide2 from '../../../Assets/image/image13.webp';
import slide3 from '../../../Assets/image/image14.webp';
import slide4 from '../../../Assets/image/image15.webp';
import slide5 from '../../../Assets/image/image71.webp';
import slide6 from '../../../Assets/image/image72.webp';
import slide7 from '../../../Assets/image/image73.webp';
import slide8 from '../../../Assets/image/image74.webp';

import { SampleNextArrow } from './SampleNextArrow';
import { SamplePrevArrow } from './SamplePrevArrow';

export const WorksSlider = () => {
  const { pathname } = useLocation();

  const settings: Settings = {
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: undefined,
          prevArrow: undefined,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: undefined,
          prevArrow: undefined,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="slider_item">
        <img alt="hair coloring" src={pathname !== '/services' ? slide1 : slide5} />
        <div className="slider_item_description">
          <h4 className="slider_item_description_title">
            {pathname !== '/services' ? 'Hair coloring' : 'Balayage'}
          </h4>
          <p className="slider_item_description_price">$230</p>
        </div>
      </div>
      <div className="slider_item">
        <img alt="hair coloring" src={pathname !== '/services' ? slide2 : slide6} />
        <div className="slider_item_description">
          <h4 className="slider_item_description_title">
            {pathname !== '/services' ? 'Manicure' : 'Full color'}
          </h4>
          <p className="slider_item_description_price">$90</p>
        </div>
      </div>
      <div className="slider_item">
        <img alt="hair coloring" src={pathname !== '/services' ? slide3 : slide7} />
        <div className="slider_item_description">
          <h4 className="slider_item_description_title">
            {pathname !== '/services' ? 'Hair coloring' : 'Lowlights'}
          </h4>
          <p className="slider_item_description_price">$230</p>
        </div>
      </div>
      <div className="slider_item">
        <img alt="hair coloring" src={pathname !== '/services' ? slide4 : slide8} />
        <div className="slider_item_description">
          <h4 className="slider_item_description_title">
            {pathname !== '/services' ? 'Haircut' : 'Hair coloring'}
          </h4>
          <p className="slider_item_description_price">$230</p>
        </div>
      </div>
    </Slider>
  );
};
