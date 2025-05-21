import Header from "./Header"
import Pfp from "./Pfp"
import styles from "./App.module.css"
import Content from "./Content"

function App() {

  return (
    <div className={styles.App}>
      <link href="https://fonts.googleapis.com/css2?family=Jacquard+24&display=swap" rel="stylesheet"></link>
      <Header name="Goths Community Cracow" />
      <Content>

        <h1>Upcoming Events</h1>
        <div className={styles.events}>
          <div className={styles.event}>
            <h2>Event 1</h2>
            <p>Date: 2023-10-01</p>
            <p>Location: Cracow</p>
          </div>
          <div className={styles.event}>
            <h2>Event 2</h2>
            <p>Date: 2023-11-01</p>
            <p>Location: Cracow</p>
          </div>
        </div>
        <div className={styles.event}>
          <h2>Event 3</h2>
          <p>Date: 2023-12-01</p>
          <p>Location: Cracow</p>
        </div>
        
      </Content>
      <div className={styles.creators}>
        <Pfp /><a>Made by Nemoniasty</a>
      </div>
    </div>
  )
}

export default App
