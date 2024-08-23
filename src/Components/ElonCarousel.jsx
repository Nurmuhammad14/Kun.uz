import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ElonCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: false,
          centerMode: true,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '0px'
        }
      }
    ]
  };

  return (
    <section className="elonlar-section" style={{ overflow: 'hidden', padding: '0 69px' }}>
      <Slider {...settings}>
        <div className="card-elon" style={{ margin: '0 20px 0 0px' }}> 
          {/* Left margin is smaller */}
          <img src="https://storage.kun.uz/source/thumbnails/_medium/10/bs0N8GVwUVpPpxqAp3FWxErKOpGbnaV3_medium.jpg" alt="" className='E-img' />
          <h2 className="elon-text">
            Chery avtomobilini O‘zbekistondagi rasmiy dilerlardan sotib olishning ahamiyati
          </h2>
        </div>
        <div className="card-elon" style={{ margin: '0 20px' }}>
          <img src="https://storage.kun.uz/source/thumbnails/_medium/10/U0Eg_8Dgu3UVwlDsqk-iQNjfBLQbpu6y_medium.jpg" alt="" className='E-img' />
          <h2 className="elon-text">
            Budapeshtni “Spa shahar”ga aylantirgan issiq buloqlar haqida nimalar ma’lum?
          </h2>
        </div>
        <div className="card-elon" style={{ margin: '0 20px' }}>
          <img src="https://storage.kun.uz/source/thumbnails/_medium/10/xrtIgyVE1LIjFKwnvniPi3f4TGbL-D25_medium.jpg" alt="" className='E-img' />
          <h2 className="elon-text">
            Infinix Note 40s'ni tanlash uchun 7 sabab
          </h2>
        </div>
        <div className="card-elon" style={{ margin: '0 0px 0 20px' }}> 
          {/* Right margin is smaller */}
          <img src="https://storage.kun.uz/source/thumbnails/_medium/10/aLL_N_HbJRiX4hG72Pyaof1aniPMM8jR_medium.jpg" alt="" className='E-img' />
          <h2 className="elon-text">
            Moviy dengiz, hayratlanarli sohillar, dengiz ustidagi mehmonxonalar - nima uchun Hurgadaga sayohat qilishingiz kerak?
          </h2>
        </div>
      </Slider>
    </section>
  );
};

export default ElonCarousel;
