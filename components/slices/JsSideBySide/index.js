import React from 'react'
import {Link} from "prismic-reactjs";
const classNames = require('classnames');

const JsSideBySide = ({slice}) => {
  const boxSizing = classNames({
    100: slice.primary.size_of_boxes==='square',
    74: slice.primary.size_of_boxes==='rectangle',
    130: slice.primary.size_of_boxes==='portrait',
  })
  return (
    <section className={`jts-side-by-side container container-${slice.primary.width}`}>
      <div className={`jts-side-by-side__row is-columns-${slice.primary.column}`}>
        {slice?.items?.map((item, i) => {
          return (
            <div className={`jts-side-by-side__item is-content-${slice.primary.align_content} is-valign-${slice.primary.vertical_align}`} key={`item-${i}`}>
              <div className="jts-side-by-side__cover">
                {item.video?.url
                  ? <div className="jts-side-by-side__cover-video">
                    <img className={`jts-side-by-side__cover-pic is-cover-${item.align_cover}`}
                         src={item.video_poster.url}
                         alt={item.video_poster.alt}/>
                    <video className="jts-side-by-side__cover-video-view" autoPlay loop muted playsInline
                           poster={item.video_poster.url}
                           preload="none" src={Link.url(item.video)}>
                    </video>
                  </div>
                  : <img className={`jts-side-by-side__cover-pic is-cover-${item.align_cover}`}
                         src={item.picture.mobile.url}
                         srcSet={`${item.picture.url} 768w`}
                         alt={item.picture.alt}/>
                }
              </div>

              <div className={`jts-side-by-side__box`}>
                <div className={`jts-side-by-side__content`}>
                  <div className={`jts-side-by-side__content-note jts-side-by-side__content-note--${i}`}>
                    <div className="jts-side-by-side__content-heading">
                      {item.heading}
                    </div>
                    <div className="jts-side-by-side__content-subheading">
                      {item.sub_heading}
                    </div>
                  </div>
                  <a href={item.button_link}
                     className="jts-side-by-side__btn">
                    {item.button_label}
                  </a>
                </div>
              </div>

              <style>{`
                .jts-side-by-side__content-note--${i} {
                  color: ${item.content_color_text};
                }
                @media only screen and (max-width: 768px) {
                  .jts-side-by-side__content-note--${i} {
                    color: ${item.mobile_content_color_text};
                  }
                }
              `}</style>
            </div>
          )
        })}
      </div>

      <style>{`
      .jts-side-by-side__item {
        background-color: ${slice.primary.background_color};
      }
      .jts-side-by-side__item:before {
        padding-top: ${boxSizing}%;
      }
      a.jts-side-by-side__btn {
        background-color: ${slice.primary.button_background};
        color: ${slice.primary.button_label_color};
      }
      a.jts-side-by-side__btn:hover {
        background-color: ${slice.primary.button_background_hover};
        color: ${slice.primary.button_label_color_hover};
      }
      .jts-side-by-side__content {
        color: ${slice.primary.text_color};
      }
      .jts-side-by-side__content-note{
        color: ${slice.primary.content_color_text};
      }
      @media only screen and (max-width: 768px) {
        .jts-side-by-side__content-note {
          color: ${slice.primary.mobile_content_color_text};
        }
      }
      `}</style>
    </section>
  )

}
export default JsSideBySide
