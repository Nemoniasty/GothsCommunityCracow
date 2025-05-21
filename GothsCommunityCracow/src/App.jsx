import Header from "./Header"
import Pfp from "./Pfp"
import styles from "./App.module.css"
import Content from "./Content"
import Footer from "./Footer"

function App() {

  return (
    <div className={styles.App}>
      <link href="https://fonts.googleapis.com/css2?family=Jacquard+24&display=swap" rel="stylesheet"></link>
      <Header name="Goths Community Cracow" />
      <Content>

        <h1>Upcoming Events</h1>
        <div className={styles.events}>
          <div className={styles.event}>
            <h2>Creeper</h2>
            <p>Date: 2025-06-11</p>
            <p>Location: Cracow Gwarek Club</p>
            <p>Details: Creeper is a band from the UK, known for their unique sound and energetic performances.</p>
            <p>Tickets: <a href="https://www.ticketmaster.pl/event/creeper-vampires-in-europe-bilety/328378223">Ticketmaster</a></p>
          </div>
          <div className={styles.event}>
            <h2>Event 2</h2>
            <p>Date: 2023-11-01</p>
            <p>Location: Cracow</p>
          </div>
          <div className={styles.event}>
            <h2>Event 3</h2>
            <p>Date: 2023-12-01</p>
            <p>Location: Cracow</p>
          </div>
        </div>
        
        
      </Content>
      
      <Footer>
        <p>Goths Community Cracow &nbsp;</p>
        <p>Contact: goths.community.cracow@gmail.com &nbsp;</p>
        <div className={styles.creators}>
          <Pfp /><u>Made by Nemoniasty</u>
        </div>
      </Footer>
    </div>
  )
}

export default App
