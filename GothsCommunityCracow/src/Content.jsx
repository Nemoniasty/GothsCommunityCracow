//import styles from "./Content.module.css"

function Content({className, children}) {
    
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default Content