import styles from "./Header.module.css"

function Header({name="no name"}) {
    
    return(
        <header className={styles.Header}>
            <p>{name}</p>
        </header>
    )
}

export default Header