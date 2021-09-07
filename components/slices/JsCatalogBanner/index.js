import React from 'react'

const JsCatalogBanner = ({slice}) => (
  <section className={'container container-hero'}>
    <div className={'jts-catalog-banner'}>
      <div className="jts-catalog-banner__box">
        <img className="jts-catalog-banner__box-pic"
             src={slice.primary.Banner.mobile.url}
             srcSet={`${slice.primary.Banner.mobile.url} 768w, ${slice.primary.Banner.url} 769w`}
             sizes="(min-width: 768px) 769px, 100vw"
             alt={slice.primary.Banner.alt}/>
      </div>
      <div className={'jts-catalog-banner__menu'}>
        <ul className="jts-catalog-banner__menu-box">
          {slice?.items?.map((item, i) =>
            <li className="jts-catalog-banner__menu-item" key={`item-${i}`}>
              {
                item.Link ?
                  <a href={item.Link} className="jts-catalog-banner__menu-link">{item.LinkTitle}</a>
                  : <span>{item.LinkTitle}</span>
              }
            </li>
          )}
        </ul>
      </div>
    </div>
  </section>
)

export default JsCatalogBanner
