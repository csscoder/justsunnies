import React from 'react'
import {Link} from "prismic-reactjs";

const JsBanner = ({slice}) => {
  const mobileViewClass = slice.primary.ShowBoxMobile === 'first' ? 'is-mobile-first' : 'is-mobile-last'
  return (
    <section className={'container container-hero'}>
      <div className={`jts-banner ${mobileViewClass} `}>
        <div className="jts-banner__box">
          {slice.primary.first_video?.url
            ? <div className="jts-banner__video">
              <img className="jts-banner__box-pic"
                   src={slice.primary.first_video_poster.url}
                   alt={slice.primary.first_video_poster.alt}/>
              <video className="jts-banner__video-view" autoPlay loop muted playsInline
                     poster={slice.primary.first_video_poster.url}
                     preload="none" src={Link.url(slice.primary.first_video)}>
              </video>
            </div>
            : <img className="jts-banner__box-pic"
                   src={slice.primary.first_picture.mobile.url}
                   srcSet={`${slice.primary.first_picture.url} 768w`}
                   alt={slice.primary.first_picture.alt}/>
          }
        </div>
        <div className="jts-banner__box">
          {slice.primary.second_video?.url
            ? <div className="jts-banner__video">
              <img className="jts-banner__box-pic"
                   src={slice.primary.second_video_poster.url}
                   alt={slice.primary.second_video_poster.alt}/>
              <video className="jts-banner__video-view" autoPlay loop muted playsInline
                     poster={slice.primary.second_video_poster.url}
                     preload="none" src={Link.url(slice.primary.second_video)}>
              </video>
            </div>
            : <img className="jts-banner__box-pic"
                   src={slice.primary.second_picture.mobile.url}
                   srcSet={`${slice.primary.second_picture.url} 768w`}
                   alt={slice.primary.second_picture.alt}/>
          }
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
      </div>
    </section>
  )
}


export default JsBanner
