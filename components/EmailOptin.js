import React, { useState } from "react"
import styles from "../styles/EmailOptin.module.scss"

const EmailOptin = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>Keep me posted through the newsletter</div>
      {formstate&&<iframe width="540" height="305" src="https://cb31df7e.sibforms.com/serve/MUIEANer0QRiSNj97_jfDHEuvA0RzLEwOH3AXStPGw3_0rO3k-7rBb4xO78cgiotL6CzSuGZto8lS7gFstEzuII1yN6bJdo6SW0UtN7rrTdzSkoFFNIw7edz-C7eDpCS9ySojlbsoBdO2fU_Lej4qM1lPUntIC2Cp9kRBLaM6DJgMS4G7bR_pZxYy6ZaGARegVShAPmEdtyX5Ht0" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>}
    </div>
  );
};

export default EmailOptin;
