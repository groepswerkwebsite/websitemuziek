import styles from "../styles/Navigation.module.scss"
import Image from "next/image"

const Navigation = ({ locale, locales }) => {
  const resolveArtists = {
    en: 'Artists',
    nl: 'Artiesten',
  }
  const resolveConcerts = {
    en: 'Concerts',
    nl: 'Concerten',
  }
  const resolveNews = {
    en: 'News',
    nl: 'Nieuws',
  }
  const resolveMerchandise = {
    en: 'Shop',
    nl: 'Winkel',
  }
  let homeurl = "/";
  if (locale != 'default') {
    homeurl = "/" + locale;
  }

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationwrapper}>
      <nav className={styles.navigation} role="navigation">

        <div className={styles.navlogo}>
          <a href={homeurl}>
            {/* <img
              src="https://a.storyblok.com/f/140451/320x200/b2d54c9b32/logo-muziek.png"
              alt="IMDBPlus Logo"
              className=""
            /> */}
            <Image src="/logo-colored-full.png" alt="IMDBPlus Logo" width="128" height="79" />
          </a>
        </div>
        <div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/artists`} className={styles.artist}>{resolveArtists[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/concerts`} className={styles.movie}>{resolveConcerts[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/news`} className={styles.newsitem}>{resolveNews[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/shop`} className={styles.product}>{resolveMerchandise[locale]}</a>
            </div>
          </div>
          <div className={styles.navlocales}>
            {
              locales.map(loc => {
                return (<div className={styles.navlocale} key={loc}>
                  <a href={`/${loc}`} className={`${locale === loc ? "selected" : ""}`}>{loc}</a>
                </div>)
              })
            }
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navigation
