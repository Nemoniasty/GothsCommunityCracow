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
      <Content className={styles.content}>

        <h1 className={styles.font_gothic}>Upcoming Events</h1>
          <div className={styles.font}>
          <div className={styles.font}> 
            <h2 className={styles.font_gothic}>Disintegration Night</h2> 
            <p>Date: 2025-06-07</p> <p>Location: SNY, plac Wszystkich Świętych 8, Kraków</p> <p>Details: Wieczór z muzyką dark goth, post-punk i wave. Idealne dla fanów mrocznych brzmień i zimnej fali.</p> <p>Tickets: <a href=""></a></p> </div>
          <div className={styles.font}> 
            <h2 className={styles.font_gothic}>Digital Riot: Castle Warm-Up</h2> 
            <p>Date: 2025-06-28</p> <p>Location: SNY, plac Wszystkich Świętych 8, Kraków</p> <p>Details: Impreza z muzyką dark goth, electro i industrial. Doskonałe przygotowanie przed Castle Party.</p> <p>Tickets: <a href=""></a></p> </div>
          <div className={styles.font}> 
            <h2 className={styles.font_gothic}>Pink Turns Blue</h2> 
            <p>Date: 2025-09-27</p> <p>Location: Klub Poczta Główna, Kraków</p> 
            <p>Details: Koncert niemieckiego zespołu post-punkowego, znanego z melancholijnych i mrocznych kompozycji.</p> <p>Tickets: <a href="https://myrockshows.com/location/130-krakow/genre-gothic/">MyRockShows</a></p> </div>
          <div className={styles.font}> 
            <h2 className={styles.font_gothic}>Sinister & Pessimist & Graceless Tour 2025</h2> <p>Date: 2025-12-09</p> <p>Location: Klub Zaścianek, Kraków</p> <p>Details: Trasa koncertowa z udziałem zespołów Sinister, Pessimist i Graceless, prezentujących mroczne brzmienia death metalu.</p> <p>Tickets: <a href="https://www.timeforgig.com/sinister-pessimist-graceless-tour-2025-krakow/events/k8ovk3">TimeForGig</a></p> </div>
          <div className={styles.font}> 
            <h2 className={styles.font_gothic}>Oh My Goth!</h2> 
            <p>Date: 2025-05-10</p> <p>Location: Jazz Rock Cafe, Sławkowska 12, Kraków</p> <p>Details: Noc pełna gotyckich brzmień, melancholii i niepokojącego piękna. DJ Preston zagra klasyki i nowości sceny dark independent.</p> <p>Tickets: <a href="https://allevents.in/krakow/oh-my-goth/200028096379540">AllEvents</a></p> </div>

          
        </div>
        
        
      </Content>
      
      <Footer>
        <p>Goths Community Cracow &nbsp;</p>
        <p>Contact: goths.community.cracow@gmail.com &nbsp;</p>
        <div className={styles.creators}>
          <Pfp /><u>Made by Aleksander Słowik</u> 
        </div>
      </Footer>
    </div>
  )
}

export default App
