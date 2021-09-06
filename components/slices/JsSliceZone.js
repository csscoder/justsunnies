import React from 'react'
import {
  JsVimeoVideoBox,
  JsBanner
} from './'

const JsSliceZone = ({ JsSliceZone }) => {
  console.log(JsSliceZone)
  return (
  <>
    {JsSliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('js_vimeo_video_box'):
          return <JsVimeoVideoBox slice={slice} key={`slice-${index}`} />
        case ('js_banner'):
          return <JsBanner slice={slice} key={`slice-${index}`} />
        default:
          return null
      }
    })}
  </>
)}

export default JsSliceZone
