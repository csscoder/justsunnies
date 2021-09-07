import React from 'react'
import {RichText} from 'prismic-reactjs'
import {Link} from "prismic-reactjs";

const JsGalleryCards = ({slice}) => {
  return (
    <section className={'container container-article'}>

      <div className={`jts-gallery-cards`}>

        {slice?.items?.map((item, i) => {
          return (
            <div className={`jts-gallery-cards__item is-${item.AlignContent}`} key={`item-${i}`}>

              <div className="jts-gallery-cards__item-cover">
                {item.Video.url ? (
                  <>
                    <img className="jts-gallery-cards__item-view" src={item.VideoPoster.url}
                         alt={item.VideoPoster.alt}/>
                    <video className="jts-gallery-cards__item-view" autoPlay loop muted playsInline
                           poster={item.VideoPoster.url}
                           preload="none" src={Link.url(item.Video)}>
                    </video>
                  </>
                ) : (
                  <img className="jts-gallery-cards__item-view" src={item.Picture.url} alt={item.Picture.alt}/>
                )}
              </div>

              <div className={'jts-gallery-cards__item-title'}>
                {item.Title}
              </div>
              <div className={'jts-gallery-cards__item-note'}>
                <RichText render={item.Description}/>
              </div>

              <div className={'jts-gallery-cards__item-links'}>
                {Array(3).fill(1).map((el, i, ) => {
                    let propsLink = `ShopLink${i+1}`
                    let propsLinkLabel = `LabelShopLink${i+1}`
                    return (
                      item[propsLink] ? (
                        <a href={item[propsLink]} className="jts-gallery-cards__item-link">
                          {item[propsLinkLabel]}
                        </a>
                      ) : (
                        <></>
                      )
                    )
                  }
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default JsGalleryCards
