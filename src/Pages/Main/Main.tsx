import React from 'react';

import { Link } from 'react-router-dom';

import { WorksSlider } from '../../Components/WorksSlider/ui/WorksSlider';

import image1 from '../../Assets/image/image1.webp';
import image2 from '../../Assets/image/image2.webp';
import image4 from '../../Assets/image/image4.webp';
import image5 from '../../Assets/image/image5.webp';
import image6 from '../../Assets/image/image6.webp';
import image7 from '../../Assets/image/image7.webp';
import image8 from '../../Assets/image/image8.webp';
import image9 from '../../Assets/image/image9.webp';
import image10 from '../../Assets/image/image10.webp';
import image11 from '../../Assets/image/image11.webp';
import image16 from '../../Assets/image/image16.webp';
import image17 from '../../Assets/image/image17.webp';
import image18 from '../../Assets/image/image18.webp';

import s from './Main.module.scss';

export const Main = () => (
  <>
    <div className={s.page}>
      Developed by /
      {' '}
      <Link
        className={s.page__wrapper}
        target="_blank"
        to="https://offthegridlab.com/"
      >
        OffTheGrid Lab
      </Link>
    </div>
    {window.innerWidth > 767
      ? (
        <>
          <h1 className={s.title}>
            <span className={s.title__line}>
              <span className={s.title__wrapper}>U</span>
              nleash your inner
              {' '}
              <span className={s.title__wrapper}>(</span>
              beauty
              <span className={s.title__wrapper}>)</span>
            </span>
            <span className={s.title__line}>
              {' '}
              with a touch of our
              {' '}
              <span className={s.title__wrapper}>expertise</span>
            </span>
          </h1>
          <section className={s.container}>
            <div className={s.column1}>
              <img alt="decorative" src={image1} />
            </div>
            <div className={s.column2}>
              <p className={`text ${s.text}`}>
                Our salon is dedicated to providing exceptional
                services and creating a relaxing and rejuvenating experience for our clients.
              </p>
            </div>
            <div className={s.column3}>
              <div className={s.column3__top}>
                <p className={`text ${s.text}`}>
                  Welcome to our beauty salon, where we believe in enhancing your natural beauty
                  <br />
                  and making you feel confident and beautiful.
                </p>
                <div className={s.badge}>
                  Book Now
                </div>
              </div>
              <img alt="decorative" src={image2} />
            </div>
          </section>
        </>
      ) : (
        <section className={s.container}>
          <div className={s.column1}>
            <img alt="decorative" src={image1} />
            <p className={`text ${s.text}`}>
              Welcome to our beauty salon, where we believe in enhancing your natural beauty
              and making you feel confident and beautiful.
            </p>
          </div>
          <h1 className={s.title}>
            <span className={s.title__wrapper}>U</span>
            nleash your inner
            {' '}
            <span className={s.title__wrapper}>(</span>
            beauty
            <span className={s.title__wrapper}>)</span>
            {' '}
            with a touch of our
            {' '}
            <span className={s.title__wrapper}>expertise</span>
          </h1>
          <div className={s.column3}>
            <div className={s.column3__top}>
              <p className={`text ${s.text}`}>
                Our salon is dedicated to providing exceptional
                services and creating a relaxing and rejuvenating experience for our clients.
              </p>
              <div className={s.badge}>
                Book Now
              </div>
            </div>
            <img alt="decorative" src={image2} />
          </div>
        </section>
      )}
    <section className={s.decorative}>
      <h2 className={s.decorative_title}>
        <span className={s.decorative_title__wrapper}>Y</span>
        ou have the
        {' '}
        <span className={s.decorative_title__wrapper}>(true) light</span>
        {' '}
        in you
      </h2>
    </section>
    <section className={s.services}>
      <h2 className={s.services_title}>
        Haircut,
        <span className={s.services_title__wrapper}>hair</span>
        {' '}
        coloring,
        {' '}
        <span className={s.services_title__wrapper}>manicure</span>
        , pedicure, massage, or any other
        {' '}
        <span className={s.services_title__wrapper}>beauty</span>
        {' '}
        service.
      </h2>
      <div className={s.services_decorative}>
        <div className={s.services_decorative__column1}>
          <img alt="decorative" src={image5} />
        </div>
        <div className={s.services_decorative__column2} />
        <div className={s.services_decorative__column3}>
          <img alt="decorative" src={image4} />
        </div>
      </div>
    </section>
    <section className={s.ourServices}>
      <h2 className={s.ourServices_title}>
        <span className={s.ourServices_title__wrapper}>O</span>
        ur Services
      </h2>
      <div className={s.ourServices__wrapper}>
        <div className={s.ourServices__left}>
          <div className={s.ourServices_item}>
            <img alt="haircut" src={image7} />
            <div className={s.ourServices_item__wrapper}>
              <h4 className={s.ourServices_item_title}>Haircut</h4>
              <p className={s.ourServices_item_description}>
                Welcome to our beauty salon, where we believe in enhancing your natural
              </p>
            </div>
          </div>
          <p className={`text ${s.text}`}>
            A beauty salon offers a wide range of services to
            enhance and maintain the appearance of its clients.
            <br />
            <br />
            Here are some common beauty salon services.
          </p>
          <div className={s.ourServices_item}>
            <img src={image8} />
            <h4 className={s.ourServices_item_title}>Manicure / pedicure</h4>
          </div>
          <div className={s.ourServices_badge}>
            Other Beauty Service
          </div>
        </div>
        <div className={s.ourServices__right}>
          <div className={s.ourServices_item}>
            <img alt="haircut" src={image6} />
            <div className={s.ourServices_item__wrapper}>
              <h4 className={s.ourServices_item_title}>Hair coloring</h4>
              <p className={s.ourServices_item_description}>
                Welcome to our beauty salon, where we believe in enhancing
                your natural beauty and making you feel confident and beautiful.
              </p>
            </div>
          </div>
          <div className={s.ourServices_item}>
            <img alt="haircut" src={image9} />
            <div className={s.ourServices_item__wrapper}>
              <h4 className={s.ourServices_item_title}>Massage</h4>
              <p className={s.ourServices_item_description}>
                Welcome to our beauty salon, where we believe in enhancing your natural
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={s.salons}>
      <div className={s.salons__decorative}>
        <img alt="salon" src={image10} />
      </div>
      <div className={s.salons_content}>
        <h2 className={s.salons_title}>
          <span className={s.salons_title__wrapper}>s</span>
          alons
        </h2>
        <img alt="decorative" src={image11} />
        <div className={s.salons_description}>
          <p>
            We pride ourselves on using only the highest quality products that
            are safe for both you and the environment.
          </p>
          <br />
          <p>
            Our salon is a clean and cozy room where you can relax and
            <br />
            enjoy beauty treatments without any worries.
          </p>
        </div>
      </div>
    </section>
    <section className={s.works}>
      <h2 className={s.works_title}>
        <span className={s.works_title__wrapper}>O</span>
        ur Works
      </h2>
      <WorksSlider />
      <img alt="decorative" className={s.works_imageDecorative} src={image16} />
    </section>
    <section className={s.beauty}>
      <h2 className={s.beauty_title}>
        <span className={s.beauty_title__wrapper}>L</span>
        et&apos;s create beauty
      </h2>
      <div className={s.beauty_content}>
        <div className={s.beauty_content__left}>
          <img alt="decorative" src={image17} />
          <div className={s.badge}>
            Book Now
          </div>
        </div>
        <div className={s.beauty_content__right}>
          <p className={`text ${s.text}`}>
            Our beauty salon is the perfect place for you.
            Make an appointment with us today and let us help you discover your true beauty.
          </p>
          <img alt="decorative" src={image18} />
        </div>
      </div>
    </section>
  </>
);
