import React from 'react'
const JsBanner = ({slice}) => {

  const mobileViewClass = slice.primary.ShowBoxMobile === 'first' ? 'is-mobile-first': 'is-mobile-last'

  return (
    <section className={`jts-banner ${mobileViewClass} `}>
      <div className="jts-banner__box">
        <img className="jts-banner__box-pic"
             src={slice.primary.FirstPicture.mobile.url}
             srcSet={`${slice.primary.FirstPicture.url} 768w`}
             alt={slice.primary.FirstPicture.alt}/>
      </div>
      <div className="jts-banner__box">
        <img className="jts-banner__box-pic"
             src={slice.primary.SecondPicture.mobile.url}
             srcSet={`${slice.primary.SecondPicture.url} 768w`}
             alt={slice.primary.SecondPicture.alt}/>
      </div>
      <div className={`jts-banner__container is-${slice.primary.AlignContentBox}`}>
        <div className="jts-banner__container-box">
          <h2 className="jts-banner__title">{slice.primary.Title}</h2>
          <h4 className="jts-banner__sub-title">{slice.primary.SubTitle}</h4>
          <a href={slice.primary.ButtonLink}
             className="jts-banner__btn">
            {slice.primary.ButtonLabel}
          </a>
        </div>
      </div>
      <style>{`
      .jts-banner__btn {
        background-color: ${slice.primary.ButtonColor};
        color: ${slice.primary.ButtonTextColor};
      }
      .jts-banner__btn:hover {
        background-color: ${slice.primary.ButtonColorHover};
        color: ${slice.primary.ButtonTextColorHover};
      }
      .jts-banner__title {
        color: ${slice.primary.TitleColor};
      }
      .jts-banner__sub-title {
        color: ${slice.primary.SubTitleColor};
      }
    `}</style>
    </section>
  )
}


export default JsBanner
