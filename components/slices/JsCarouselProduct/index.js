import React, {useEffect} from 'react'

const JsCarouselProduct = ({slice}) => {
  const settings = {
    container: '.js-carouse-slider',
    items: 2,
    gutter: 20,
    lazyload: true,
    loop: true,
    nav: false,
    rewind: false,
    controls:false,
    mouseDrag: true,
    responsive: {
      "768": {
        items: 3,
        gutter: 30,
      },
      "992": {
        items: 4,
        gutter: 60,
      }
    },
  };

  let Carousel = null;

  useEffect(() => {
    Carousel = require('tiny-slider/src/tiny-slider').tns(settings);
  }, []);

  const setCarouselRef = element => {
    Carousel = element;
  };

  const nextSlide = () => {
    Carousel.goTo('next');
  }
  const prevSlide = () => {
    Carousel.goTo('prev');
  }

  return (
    <section className="container container-article">
      <div className={'jts-carousel-product'}>
        <h3 className={`jts-carousel-product__title is-${slice.primary.title_align}`}>{slice.primary.title}</h3>
        <div className={'jts-carousel-product__slider'}>
          <div className={'js-carouse-slider'} >
            {slice?.items?.map((item, i) => {
              return (
                <a className="jts-carousel-product__item" href={item.link_slide} key={`item-${i}`}>
                <span className="jts-carousel-product__item-box">
                      <img className="jts-carousel-product__item-pic" src={item.picture_slide.url} alt={item.picture_slide.alt}/>
                </span>
                  <span className={'jts-carousel-product__item-title'}>{item.title_slide}</span>
                  <span className={'jts-carousel-product__item-note'}>{item.description_slide}</span>
                </a>
              )
            })}
          </div>
          <div  onClick={nextSlide} className="jts-carousel-product__arrow is-next" />
          <div  onClick={prevSlide} className="jts-carousel-product__arrow is-prev"/>
        </div>
      </div>
    </section>
  )
}

export default JsCarouselProduct
