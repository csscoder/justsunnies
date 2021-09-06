import React from 'react'

const JsVimeoVideoBox = ({slice}) => {
  let ratioBox
  switch (slice.primary.VideoRatio) {
    case "16:9":
      ratioBox = '56.25%'
      break;
    case "4:3":
      ratioBox = '75%'
      break;
    default:
      ratioBox = '50%'
  }
  return (
    <div className="jts-vimeo-box">
      <img src={slice.primary.PosterVideo.url} alt={slice.primary.PosterVideo.alt} className="jts-vimeo-box__poster"/>
      <iframe  className="jts-vimeo-box__iframe" title={slice.primary.TitleVideo}
              src={`https://player.vimeo.com/video/${slice.primary.IdVimeo}?autoplay=1&amp;loop=1&amp;color=ffffff&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;muted=1&amp;background=1"
              frameBorder="0" allow="autoplay; fullscreen; picture-in-picture`}
               > </iframe>
      <style>{`
        .jts-vimeo-box:before {
          padding-top: ${ratioBox}
        }
      `}</style>
    </div>
  )
}

export default JsVimeoVideoBox
