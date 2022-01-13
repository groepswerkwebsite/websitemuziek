import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Song.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"
import Genre from "./Genre"



const Song = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;
    var genres = data.rels.filter(obj => {
        return content.genre.includes(obj.uuid)
    });
  } else {
    var content = data;
  }


  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.song}>
          <h1 className={styles.title}>
            {content.Title}
          </h1>
           <div className={styles.artist}>
            {render(content.Artist)}
            </div>
            <div className={styles.genre}>
            {genres.map((item, index) => (
              <div className={styles.genre}>
                <img src={item.content.flag.filename}></img>
              </div>
            ))}
          </div>
        </div>
      </main>
    </SbEditable>
  )
}

export default Song
