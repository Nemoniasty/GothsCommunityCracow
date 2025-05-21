import styles from "./Pfp.module.css"

import nemo from "./assets/nemo.jpg"

function Pfp() {
    return(
        <img className={styles.Pfp} src={nemo} alt="" />
    )
}

export default Pfp