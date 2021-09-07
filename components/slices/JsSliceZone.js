import React from 'react'
import {
  JsVimeoVideoBox,
  JsBanner,
  JsCarouselProduct,
  JsCatalogBanner,
  JsGalleryCards
} from './'

const JsSliceZone = ({ JsSliceZone }) => {
  return (
  <>
    {JsSliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('js_vimeo_video_box'):
          return <JsVimeoVideoBox slice={slice} key={`slice-${index}`} />
        case ('js_banner'):
          return <JsBanner slice={slice} key={`slice-${index}`} />
        case ('js_carousel_product'):
          return <JsCarouselProduct slice={slice} key={`slice-${index}`} />
        case ('js_catalog_banner'):
          return <JsCatalogBanner slice={slice} key={`slice-${index}`} />
        case ('js_gallery_card'):
          return <JsGalleryCards slice={slice} key={`slice-${index}`} />
        default:
          return null
      }
    })}
  </>
)}

export default JsSliceZone
