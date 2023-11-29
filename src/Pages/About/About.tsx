import React from 'react';

import image19 from '../../Assets/image/image19.webp';
import image20 from '../../Assets/image/image20.webp';
import image21 from '../../Assets/image/image21.png';
import image22 from '../../Assets/image/image22.png';
import image23 from '../../Assets/image/image23.png';
import image24 from '../../Assets/image/image24.png';
import image25 from '../../Assets/image/image25.png';
import image26 from '../../Assets/image/image26.png';
import image27 from '../../Assets/image/image27.png';
import image28 from '../../Assets/image/image28.png';
import image29 from '../../Assets/image/image29.png';
import image30 from '../../Assets/image/image30.png';
import image31 from '../../Assets/image/image31.png';
import image32 from '../../Assets/image/image32.png';
import image33 from '../../Assets/image/image33.png';
import image34 from '../../Assets/image/image34.png';
import image35 from '../../Assets/image/image35.png';
import image36 from '../../Assets/image/image36.png';
import image37 from '../../Assets/image/image37.png';
import image38 from '../../Assets/image/image38.png';
import image39 from '../../Assets/image/image39.png';
import image40 from '../../Assets/image/image40.png';
import image41 from '../../Assets/image/image41.png';
import image42 from '../../Assets/image/image42.png';
import image43 from '../../Assets/image/image43.png';
import image44 from '../../Assets/image/image44.png';
import image45 from '../../Assets/image/image45.webp';
import image46 from '../../Assets/image/image46.webp';
import image47 from '../../Assets/image/image47.webp';
import image48 from '../../Assets/image/image48.webp';
import image49 from '../../Assets/image/image49.webp';
import image50 from '../../Assets/image/image50.webp';
import image51 from '../../Assets/image/image51.webp';
import image52 from '../../Assets/image/image52.webp';

import s from './About.module.scss';

const About = () => (
  <>
    <p className={s.page}>
      Main /
      <span className={s.page__wrapper}> About Us</span>
    </p>
    <h1 className={s.title}>
      <span className={s.title__wrapper}>A</span>
      bout the Radiante
      <span className={s.title__wrapper}>(</span>
      salon
      <span className={s.title__wrapper}>)</span>
    </h1>
    {window.innerWidth > 767
      ? (
        <section className={s.container}>
          <div className={s.column1}>
            <img alt="decorative" src={image20} />
          </div>
          <div className={s.column2}>
            <p className={`text ${s.text}`}>
              Welcome to our beauty salon, where we believe that everyone deserves to look
              and feel their best.
            </p>
            <p className={`text ${s.text}`}>
              Our team of highly skilled professionals is dedicated to providing you with top-notch
              beauty services that will leave you feeling refreshed and rejuvenated.
            </p>
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
          </div>
          <div className={s.column3}>
            <img alt="decorative" src={image19} />
          </div>
        </section>
      ) : (
        <section className={s.container}>
          <div className={s.wrapper}>
            <div className={s.column1}>
              <img alt="decorative" src={image20} />
            </div>
            <div className={s.column2}>
              <p className={`text ${s.text}`}>
                Welcome to our beauty salon, where we believe that everyone deserves to look
                and feel their best.
              </p>
              <p className={`text ${s.text}`}>
                Our team of highly skilled professionals is dedicated to providing you with
                top-notch beauty services that will leave you feeling refreshed and rejuvenated.
              </p>
              <div className={s.badge}>
                Book Now
              </div>
            </div>
          </div>
          <div className={s.column3}>
            <img alt="decorative" src={image19} />
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
          </div>
        </section>
      )}
    <section className={s.ourSalon}>
      {window.innerWidth < 767
      && (
        <h2 className={s.ourSalon_title}>
          <span className={s.ourSalon_title__wrapper}>O</span>
          ur salon
          <br />
          <div className={s.ourSalon_title__line}> is dedicated</div>
        </h2>
      )}
      <div className={s.ourSalon_numbers}>
        <div className={`${s.ourSalon_numbers_item} ${s.num1}`}>
          <p className={s.count}>001</p>
          <div className={s.num__wrapper}>
            <p className={s.num}>10+</p>
            <p className={s.description}>years of experience</p>
          </div>
        </div>
        <div className={`${s.ourSalon_numbers_item} ${s.num2}`}>
          <p className={s.count}>002</p>
          <div className={s.num__wrapper}>
            <p className={s.num}>4</p>
            <p className={s.description}>salons</p>
          </div>
        </div>
        <div className={`${s.ourSalon_numbers_item} ${s.num3}`}>
          <p className={s.count}>003</p>
          <div className={s.num__wrapper}>
            <p className={s.num}>26+</p>
            <p className={s.description}>professional masters</p>
          </div>
        </div>
        <div className={`${s.ourSalon_numbers_item} ${s.num4}`}>
          <p className={s.count}>004</p>
          <div className={s.num__wrapper}>
            <p className={s.num}>∞</p>
            <p className={s.description}>love for creating beauty</p>
          </div>
        </div>
      </div>
      <div className={s.ourSalon_content}>
        {window.innerWidth > 767
          && (
            <h2 className={s.ourSalon_title}>
              <span className={s.ourSalon_title__wrapper}>O</span>
              ur salon
              <br />
              <div className={s.ourSalon_title__line}> is dedicated</div>
            </h2>
          )}
        <p className={`text ${s.text}`}>
          At our salon, we understand that beauty is not just about the exterior.
          That&apos;s why we offer holistic wellness services to help you achieve inner balance
          and harmony.
        </p>
        <div className={s.badge}>
          Book Now
        </div>
      </div>
    </section>
    <section className={s.services}>
      <h2 className={s.services_title}>
        <span className={s.services_title__wrapper}>O</span>
        ur Services
      </h2>
      {window.innerWidth > 767 ? (
        <div className={s.services_items}>
          <div className={`${s.services_item} ${s.item1}`}>
            <div className={s.services_item_num}>
              001
            </div>
            <div className={s.services_item__wrapper}>
              <h3 className={s.services_item_title}>Haircut</h3>
              <p className={s.services_item_description}>
                Professional hairdressers provide haircuts, blow-drying,
                and hairstyling services according to the client&apos;s preferences.
              </p>
            </div>
            <div className={s.services_item_preview}>
              <img alt="haircut" src={image21} />
              <img alt="haircut" src={image22} />
              <img alt="haircut" src={image23} />
              <img alt="haircut" src={image24} />
            </div>
          </div>
          <div className={`${s.services_item} ${s.item2}`}>
            <div className={s.services_item_num}>
              002
            </div>
            <div className={s.services_item__wrapper}>
              <h3 className={s.services_item_title}>Hair coloring</h3>
              <p className={s.services_item_description}>
                Skilled colorists offer various hair coloring techniques such as highlights,
                lowlights, balayage, ombre, and full hair color transformations.
              </p>
            </div>
            <div className={s.services_item_preview}>
              <img alt="Hair coloring" src={image25} />
              <img alt="Hair coloring" src={image26} />
              <img alt="Hair coloring" src={image27} />
              <img alt="Hair coloring" src={image28} />
              <img alt="Hair coloring" src={image29} />
            </div>
          </div>
          <div className={`${s.services_item} ${s.item3}`}>
            <div className={s.services_item_num}>003</div>
            <div className={s.services_item__wrapper}>
              <h3 className={s.services_item_title}>Manicure / pedicure</h3>
              <p className={s.services_item_description}>
                Nail technicians provide manicures and pedicures, including nail shaping,
                cuticle care, polish application, and sometimes
                additional services like nail art or gel extensions.
              </p>
            </div>
            <div className={s.services_item_preview}>
              <img alt="Manicure / pedicure" src={image30} />
              <img alt="Manicure / pedicure" src={image31} />
              <img alt="Manicure / pedicure" src={image32} />
            </div>
          </div>
          <div className={`${s.services_item} ${s.item4}`}>
            <div className={s.services_item_num}>004</div>
            <div className={s.services_item__wrapper}>
              <h3 className={s.services_item_title}>Massage</h3>
              <p className={s.services_item_description}>
                Massage therapists offer various types
                of massages like Swedish, deep tissue, hot stone, or aromatherapy massages
                to relax muscles and relieve stress.
              </p>
            </div>
            <div className={s.services_item_preview}>
              <img alt="Massage" src={image33} />
              <img alt="Massage" src={image34} />
              <img alt="Massage" src={image35} />
              <img alt="Massage" src={image36} />
            </div>
          </div>
          <div className={`${s.services_item} ${s.item5}`}>
            <div className={s.services_item_num}>005</div>
            <div className={s.services_item__wrapper}>
              <h3 className={s.services_item_title}>Make up</h3>
              <p className={s.services_item_description}>
                Professional makeup artists provide makeup application services for special
                occasions like weddings, parties, or photoshoots.
              </p>
            </div>
            <div className={s.services_item_preview}>
              <img alt="Make up" src={image37} />
              <img alt="Make up" src={image38} />
              <img alt="Make up" src={image39} />
              <img alt="Make up" src={image40} />
              <img alt="Make up" src={image41} />
            </div>
          </div>
          <div className={`${s.services_item} ${s.item6}`}>
            <div className={s.services_item_num}>006</div>
            <div className={s.services_item__wrapper}>
              <h3 className={s.services_item_title}>Brow</h3>
              <p className={s.services_item_description}>
                Our care services provide a long-lasting effect,
                which allows you to enjoy neatly decorated eyebrows
              </p>
            </div>
            <div className={s.services_item_preview}>
              <img alt="Brow" src={image42} />
              <img alt="Brow" src={image43} />
              <img alt="Brow" src={image44} />
            </div>
          </div>
        </div>
      ) : (
        <div className={s.services_items}>
          <div className={`${s.services_item} ${s.item1}`}>
            <div className={s.services_item__container}>
              <div className={s.services_item_num}>
                001
              </div>
              <div className={s.services_item__wrapper}>
                <h3 className={s.services_item_title}>Haircut</h3>
                <p className={s.services_item_description}>
                  Professional hairdressers provide haircuts, blow-drying,
                  and hairstyling services according to the client&apos;s preferences.
                </p>
              </div>
            </div>
            <div className={s.services_item_preview}>
              <img alt="haircut" src={image21} />
              <img alt="haircut" src={image22} />
              <img alt="haircut" src={image23} />
              <img alt="haircut" src={image24} />
            </div>
          </div>
          <div className={`${s.services_item} ${s.item2}`}>
            <div className={s.services_item__container}>
              <div className={s.services_item_num}>
                002
              </div>
              <div className={s.services_item__wrapper}>
                <h3 className={s.services_item_title}>Hair coloring</h3>
                <p className={s.services_item_description}>
                  Skilled colorists offer various hair coloring techniques such as highlights,
                  lowlights, balayage, ombre, and full hair color transformations.
                </p>
              </div>
            </div>
            <div className={s.services_item_preview}>
              <img alt="Hair coloring" src={image25} />
              <img alt="Hair coloring" src={image26} />
              <img alt="Hair coloring" src={image27} />
              <img alt="Hair coloring" src={image28} />
              {window.innerWidth > 767 && <img alt="Hair coloring" src={image29} />}
            </div>
          </div>
          <div className={`${s.services_item} ${s.item3}`}>
            <div className={s.services_item__container}>
              <div className={s.services_item_num}>003</div>
              <div className={s.services_item__wrapper}>
                <h3 className={s.services_item_title}>Manicure / pedicure</h3>
                <p className={s.services_item_description}>
                  Nail technicians provide manicures and pedicures, including nail shaping,
                  cuticle care, polish application, and sometimes
                  additional services like nail art or gel extensions.
                </p>
              </div>
            </div>
            <div className={s.services_item_preview}>
              <img alt="Manicure / pedicure" src={image30} />
              <img alt="Manicure / pedicure" src={image31} />
              <img alt="Manicure / pedicure" src={image32} />
              {window.innerWidth < 767 && <img alt="Hair coloring" src={image29} />}
            </div>
          </div>
          <div className={`${s.services_item} ${s.item4}`}>
            <div className={s.services_item__container}>
              <div className={s.services_item_num}>004</div>
              <div className={s.services_item__wrapper}>
                <h3 className={s.services_item_title}>Massage</h3>
                <p className={s.services_item_description}>
                  Massage therapists offer various types
                  of massages like Swedish, deep tissue, hot stone, or aromatherapy massages
                  to relax muscles and relieve stress.
                </p>
              </div>
            </div>
            <div className={s.services_item_preview}>
              <img alt="Massage" src={image33} />
              <img alt="Massage" src={image34} />
              <img alt="Massage" src={image35} />
              <img alt="Massage" src={image36} />
            </div>
          </div>
          <div className={`${s.services_item} ${s.item5}`}>
            <div className={s.services_item__container}>
              <div className={s.services_item_num}>005</div>
              <div className={s.services_item__wrapper}>
                <h3 className={s.services_item_title}>Make up</h3>
                <p className={s.services_item_description}>
                  Professional makeup artists provide makeup application services for special
                  occasions like weddings, parties, or photoshoots.
                </p>
              </div>
            </div>
            <div className={s.services_item_preview}>
              <img alt="Make up" src={image37} />
              <img alt="Make up" src={image38} />
              <img alt="Make up" src={image39} />
              <img alt="Make up" src={image40} />
              {window.innerWidth > 767 && <img alt="Make up" src={image41} />}
            </div>
          </div>
          <div className={`${s.services_item} ${s.item6}`}>
            <div className={s.services_item__container}>
              <div className={s.services_item_num}>006</div>
              <div className={s.services_item__wrapper}>
                <h3 className={s.services_item_title}>Brow</h3>
                <p className={s.services_item_description}>
                  Our care services provide a long-lasting effect,
                  which allows you to enjoy neatly decorated eyebrows
                </p>
              </div>
            </div>
            <div className={s.services_item_preview}>
              <img alt="Brow" src={image42} />
              <img alt="Brow" src={image43} />
              <img alt="Brow" src={image44} />
              {window.innerWidth < 767 && <img alt="Make up" src={image41} />}
            </div>
          </div>
        </div>
      )}
    </section>
    <section className={s.salons}>
      <div className={s.salons__wrapper}>
        <div className={s.salons_content}>
          <h2 className={s.salons_title}>
            <span className={s.salons_title__wrapper}>4</span>
            salons
          </h2>
          <div className={s.salons_items}>
            <div className={s.salons_item}>
              <p className={s.salons_item_num}>001</p>
              <img alt="salon" src={image46} />
            </div>
            <div className={s.salons_item}>
              <p className={s.salons_item_num}>002</p>
              <img alt="salon" src={image47} />
            </div>
            <div className={s.salons_item}>
              <p className={s.salons_item_num}>003</p>
              <img alt="salon" src={image48} />
            </div>
            <div className={s.salons_item}>
              <p className={s.salons_item_num}>004</p>
              <img alt="salon" src={image49} />
            </div>
          </div>
          <div className={s.salons_description}>
            <p className={s.salons_description_num}>002</p>
            <p className={s.salons_description_location}>
              396 Pottsville / St Clair HighwayPottsville, PA 17901
            </p>
            <p className={s.salons_description_text}>
              Our salon is a clean and welcoming space where you can
              relax and enjoy your beauty treatments without any worries.
            </p>
          </div>
        </div>
        <div className={s.salons_decorative}>
          <img alt="salon" src={image45} />
        </div>
      </div>
      <img alt="decorative" className={s.salons_img} src={image50} />
    </section>
    <section className={s.beauty}>
      <h2 className={s.beauty_title}>
        <span className={s.beauty_title__wrapper}>L</span>
        et&apos;s create beauty
      </h2>
      <div className={s.beauty_content}>
        <div className={s.beauty_content__left}>
          <img alt="decorative" src={image51} />
          <div className={s.badge}>
            Book Now
          </div>
        </div>
        <div className={s.beauty_content__right}>
          <p className={`text ${s.text}`}>
            Our beauty salon is the perfect place for you.
            Make an appointment with us today and let us help you discover your true beauty.
          </p>
          <img alt="decorative" src={image52} />
        </div>
      </div>
    </section>
  </>
);

export default About;
