import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
            <img
            src="https://a.storyblok.com/f/133261/3039x582/a60d166ec2/logo-colored-full.png/m/200x0"
            alt="Music is life itself"
            className=""
            />
        </div>
        <p>The true beauty of music is that it connects people. It carries a message, and we, the musicians, are the messengers.</p>
      </div>
    </footer>



  )
}

export default Footer
