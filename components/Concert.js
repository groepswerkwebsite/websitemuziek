import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Concert.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"



const Concert = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;
  } else {
    var content = data;
  }


  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.concert}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
           <div className={styles.Description}>
            {render(content.Description)}
            </div>
            <div className={styles.Location}>
            {render(content.Location)}
            </div>
            <div className={styles.date}>
            {render(content.Date)}
            </div>
        </div>
      </main>
    </SbEditable>
  )
}

export default Concert
