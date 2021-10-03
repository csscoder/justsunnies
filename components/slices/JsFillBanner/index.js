import React from 'react'
import {RichText} from 'prismic-reactjs'
import {Link} from "prismic-reactjs";

const JsFillBanner = ({slice}) => (
  <section className={'jts-fill-banner'}>

    <div className={`jts-fill-banner__box is-${slice.primary.align_cover}`}>
      <div className="jts-fill-banner__box-col is-cover">
        {slice.primary.video?.url
          ? <>
            <img className="jts-fill-banner__pic"
                 src={slice.primary.video_poster.url}
                 alt={slice.primary.video_poster.alt}/>
            <video className="jts-fill-banner__video" autoPlay loop muted playsInline
                   poster={slice.primary.video_poster.url}
                   preload="none" src={Link.url(slice.primary.video)}>
            </video>
          </>
          : <img className="jts-fill-banner__pic"
                 src={slice.primary.picture.url}
                 alt={slice.primary.picture.alt}/>
        }
      </div>
      <div className={`jts-fill-banner__box-col is-content`}>
        <div className={`jts-fill-banner__content is-${slice.primary.content_align}`}>
          <div className="jts-fill-banner__subtitle">{slice.primary.sub_heading}</div>
          <div className="jts-fill-banner__title">{slice.primary.heading}</div>
          <div className={'jts-fill-banner__note'}>
            <RichText render={slice.primary.content}/>
          </div>
          {
            slice.primary.button_link ?
              <div className={'jts-fill-banner__wrap-btn'}>
                <a href={slice.primary.button_link} className="jts-fill-banner__btn">{slice.primary.button_label}</a>
              </div>
              : <></>
          }
        </div>
      </div>
    </div>

    <style>{`
      .jts-fill-banner {
        background-color: ${slice.primary.background_color};
      }
      .jts-fill-banner__btn {
        background-color: ${slice.primary.button_background};
        color: ${slice.primary.button_label_color};
      }
      .jts-fill-banner__btn:hover {
        background-color: ${slice.primary.button_background_hover};
        color: ${slice.primary.button_label_color_hover};
      }
      .jts-fill-banner__content {
        color: ${slice.primary.text_color};
      }
      `}</style>

  </section>
)
export default JsFillBanner
