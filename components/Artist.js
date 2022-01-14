import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Artist.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"

const resolveSongs = {
  en: 'Songs',
  nl: 'Liedjes',
}

const Artist = ({ data, level }) => {
  var locale = 'en';
  var songs = [];
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;
    var songs = data.rels.filter(obj => {
      return content.songs.includes(obj.uuid);
    });
  } else {
    var content = data;
  }



  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.artist}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.description}>
            {render(content.description)}
          </div>
          {songs && songs.length > 0 && <RelatedItemGallerySmall items={resolveSongs} title="Related songs" type="song"></RelatedItemGallerySmall>}
        </div>
      </main>
    </SbEditable>
  )
}

export default Artist
