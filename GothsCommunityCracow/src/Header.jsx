import styles from "./Header.module.css"

function Header({name="no name"}) {
    
    return(
        <header className={styles.Header}>
            <p>{name}</p>
            <div className={styles.nav}>
            </div>
        </header>
    )
}

export default Header