import React from 'react';

import { WorksSlider } from '../../Components/WorksSlider/ui/WorksSlider';

import image53 from '../../Assets/image/image53.webp';
import image54 from '../../Assets/image/image54.webp';
import image55 from '../../Assets/image/image55.webp';
import image56 from '../../Assets/image/image56.webp';
import image57 from '../../Assets/image/image57.webp';
import image58 from '../../Assets/image/image58.webp';
import image59 from '../../Assets/image/image59.webp';
import image60 from '../../Assets/image/image60.webp';
import image61 from '../../Assets/image/image61.webp';
import image62 from '../../Assets/image/image62.webp';
import image63 from '../../Assets/image/image63.webp';
import image64 from '../../Assets/image/image64.webp';
import image65 from '../../Assets/image/image65.webp';
import image66 from '../../Assets/image/image66.webp';
import image67 from '../../Assets/image/image67.webp';
import image68 from '../../Assets/image/image68.webp';
import image69 from '../../Assets/image/image69.webp';
import image70 from '../../Assets/image/image70.webp';

import s from './HairColoring.module.scss';

const HairColoring = () => (
  <>
    <section className={s.wrapper}>
      <p className={s.page}>
        Main /
        <span className={s.page__wrapper}> Services / Hair coloring</span>
      </p>
      <h1 className={s.title}>
        <span className={s.title__wrapper}>H</span>
        air coloring
        <div className={s.title__line}>
          <span className={s.title__wrapper}> (</span>
          service
          <span className={s.title__wrapper}>)</span>
        </div>
      </h1>
      <p className={`text ${s.text}`}>
        At our salon, we understand that hair color is a form of self-expression
      </p>
      <img alt="decorative" src={image53} />
      <p className={`text ${s.text}`}>
        And can truly enhance your overall appearance.
      </p>
    </section>
    <div className={s.scroll}>
      <svg
        fill="none"
        height="22"
        viewBox="0 0 6 22"
        width="6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          // eslint-disable-next-line max-len
          d="M3 22L5.88675 17L0.113246 17L3 22ZM2.5 -7.5129e-09L2.5 17.5L3.5 17.5L3.5 7.5129e-09L2.5 -7.5129e-09Z"
          fill="black"
        />
      </svg>
      <p>(scroll)</p>
      <svg
        fill="none"
        height="22"
        viewBox="0 0 6 22"
        width="6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          // eslint-disable-next-line max-len
          d="M3 22L5.88675 17L0.113246 17L3 22ZM2.5 -7.5129e-09L2.5 17.5L3.5 17.5L3.5 7.5129e-09L2.5 -7.5129e-09Z"
          fill="black"
        />
      </svg>
    </div>
    <section className={s.services}>
      {window.innerWidth > 767
        ? (
          <h2 className={s.services_title}>
            Our team of skilled and experienced hair colorists are dedicated
            to providing you with top-notch service and ensuring
            <br />
            your satisfaction.
          </h2>
        ) : (
          <h2 className={s.services_title}>
            Our team of skilled and experienced hair colorists are dedicated
            to providing you with top-notch service and ensuring
            your satisfaction.
          </h2>
        )}
      <div className={s.services_content}>
        <div className={s.column1}>
          <div className={s.services_item}>
            <img alt="ombre" src={image55} />
            <div className={s.services_item__wrapper}>
              <h3 className={s.services_item_title}>Ombre</h3>
              <p className={s.services_item_price}>from 90$</p>
            </div>
          </div>
          <div className={s.services_item}>
            <img alt="Balayage" src={image58} />
            <div className={s.services_item__wrapper}>
              <h3 className={s.services_item_title}>Balayage</h3>
              <p className={s.services_item_price}>from 130$</p>
            </div>
          </div>
        </div>
        <div className={s.column2}>
          <p className={`text ${s.text}`}>
            During your consultation, our colorists will take the time to
            understand your vision and assess your hair type and condition.
          </p>
          <div className={s.services_item}>
            <img alt="Highlights" src={image56} />
            <div className={s.services_item__wrapper}>
              <h3 className={s.services_item_title}>Highlights</h3>
              <p className={s.services_item_price}>from 125$</p>
            </div>
          </div>
          <p className={`text ${s.text}`}>
            We offer a variety of coloring techniques, including highlights,
            lowlights, balayage, ombre, and full color.
            <br />
            <br />
            Whether you want to add depth and dimension to your current shade or completely change
            your hair color, our team will work closely with you to achieve the desired outcome.
          </p>
        </div>
        <div className={s.column3}>
          <div className={s.services_item}>
            <img alt="Full color" src={image54} />
            <div className={s.services_item__wrapper}>
              <h3 className={s.services_item_title}>Full color</h3>
              <p className={s.services_item_price}>from 120$</p>
            </div>
          </div>
          <p className={`text ${s.text}`}>
            They will provide personalized recommendations based on your skin tone, face shape,
            and lifestyle, ensuring that the chosen color complements your overall appearance.
          </p>
          <div className={s.services_item}>
            <img alt="Lowlights" src={image57} />
            <div className={s.services_item__wrapper}>
              <h3 className={s.services_item_title}>Lowlights</h3>
              <p className={s.services_item_price}>from 190$</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={s.colorists}>
      <h2 className={s.colorists_title}>
        <span className={s.colorists_title__wrapper}>O</span>
        ur Colorists
      </h2>
      <div className={s.colorists_cards}>
        <div className={s.colorists_card__wrapper}>
          <div className={`${s.colorists_card} ${s.card1}`}>
            <img alt="colorist Anna" src={image59} />
            <h3 className={s.colorists_card_name}>Anna</h3>
            <p className={s.colorists_card_experience}>4 years of experience</p>
          </div>
          <div className={`${s.colorists_card} ${s.card2}`}>
            <img alt="colorist Emma" src={image60} />
            <h3 className={s.colorists_card_name}>Emma</h3>
            <p className={s.colorists_card_experience}>2 years of experience</p>
          </div>
          <div className={`${s.colorists_card} ${s.card3}`}>
            <img alt="colorist Sarah" src={image61} />
            <h3 className={s.colorists_card_name}>Sarah</h3>
            <p className={s.colorists_card_experience}>6 years of experience</p>
          </div>
        </div>
        <div className={s.colorists_card__wrapper}>
          <div className={`${s.colorists_card} ${s.card4}`}>
            <img alt="colorist John" src={image62} />
            <h3 className={s.colorists_card_name}>John</h3>
            <p className={s.colorists_card_experience}>9 years of experience</p>
          </div>
          <div className={`${s.colorists_card} ${s.card5}`}>
            <img alt="colorist Julia" src={image63} />
            <h3 className={s.colorists_card_name}>Julia</h3>
            <p className={s.colorists_card_experience}>3 years of experience</p>
          </div>
          <div className={`${s.colorists_card} ${s.card6}`}>
            <img alt="colorist Grace" src={image64} />
            <h3 className={s.colorists_card_name}>Grace</h3>
            <p className={s.colorists_card_experience}>8 years of experience</p>
          </div>
        </div>
        <div className={s.colorists_card__wrapper}>
          <div className={`${s.colorists_card} ${s.card7}`}>
            <img alt="colorist Mary" src={image65} />
            <h3 className={s.colorists_card_name}>Mary</h3>
            <p className={s.colorists_card_experience}>1 years of experience</p>
          </div>
          <div className={`${s.colorists_card} ${s.card8}`}>
            <img alt="colorist Joshua" src={image66} />
            <h3 className={s.colorists_card_name}>Joshua</h3>
            <p className={s.colorists_card_experience}>4 years of experience</p>
          </div>
          <div className={`${s.colorists_card} ${s.card9}`}>
            <img alt="colorist Emily" src={image67} />
            <h3 className={s.colorists_card_name}>Emily</h3>
            <p className={s.colorists_card_experience}>5 years of experience</p>
          </div>
        </div>
      </div>
    </section>
    <section className={s.works}>
      <h2 className={s.works_title}>
        <span className={s.works_title__wrapper}>O</span>
        ur Works
      </h2>
      <WorksSlider />
      <img alt="decorative" className={s.works_imageDecorative} src={image68} />
    </section>
    <section className={s.beauty}>
      <h2 className={s.beauty_title}>
        <span className={s.beauty_title__wrapper}>L</span>
        et&apos;s create beauty
      </h2>
      <div className={s.beauty_content}>
        <div className={s.beauty_content__left}>
          <img alt="decorative" src={image70} />
          <div className={s.badge}>
            Book Now
          </div>
        </div>
        <div className={s.beauty_content__right}>
          <p className={`text ${s.text}`}>
            Our beauty salon is the perfect place for you.
            Make an appointment with us today and let us help you discover your true beauty.
          </p>
          <img alt="decorative" src={image69} />
        </div>
      </div>
    </section>
  </>
);

export default HairColoring;
