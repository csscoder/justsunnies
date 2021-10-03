import React from 'react'
import {RichText} from 'prismic-reactjs'
import {Link} from "prismic-reactjs";

const JsImageOverlay = ({slice}) => (
  <section className={`jts-image-overlay container container-${slice.primary.width}`}>
    <div className="jts-image-overlay__in">
      <div className="jts-image-overlay__cover">
        {slice.primary.video?.url
          ? <div className="jts-image-overlay__cover-video">
            <img className={`jts-image-overlay__cover-pic is-cover-${slice.primary.align_cover}`}
                 src={slice.primary.video_poster.url}
                 alt={slice.primary.video_poster.alt}/>
            <video className="jts-image-overlay__cover-video-view" autoPlay loop muted playsInline
                   poster={slice.primary.video_poster.url}
                   preload="none" src={Link.url(slice.primary.video)}>
            </video>
          </div>
          : <img className={`jts-image-overlay__cover-pic is-cover-${slice.primary.align_cover}`}
                 src={slice.primary.picture.mobile.url}
                 srcSet={`${slice.primary.picture.url} 768w`}
                 alt={slice.primary.picture.alt}/>
        }
      </div>
    </div>
    <div className={`jts-image-overlay__box is-mobile-${slice.primary.mobile_content_position}`}>
      <div className={`jts-image-overlay__content is-${slice.primary.align_content}`}>
        <div className="jts-image-overlay__content-note">
          <RichText render={slice.primary.content_box}/>
        </div>
        <a href={slice.primary.button_link}
           className="jts-image-overlay__btn">
          {slice.primary.button_label}
        </a>
      </div>
    </div>

    <style>{`
      .jts-image-overlay__in {
        background-color: ${slice.primary.background_color};
      }
      a.jts-image-overlay__btn {
        background-color: ${slice.primary.button_background};
        color: ${slice.primary.button_label_color};
      }
      a.jts-image-overlay__btn:hover {
        background-color: ${slice.primary.button_background_hover};
        color: ${slice.primary.button_label_color_hover};
      }
      .jts-image-overlay__content {
        color: ${slice.primary.text_color};
      }
      .jts-image-overlay__content-note{
        color: ${slice.primary.content_color_text};
      }
      @media only screen and (max-width: 768px) {
        .jts-image-overlay__content-note {
          color: ${slice.primary.mobile_content_color_text};
        }
      }
      `}</style>
  </section>
)
export default JsImageOverlay
