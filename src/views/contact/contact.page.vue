<template>
  <div class="home">
    <navigationBar/>

    <main>
      <div id="uitgelichteHotels">
        <h2>Contact</h2>
      </div>

      <div id="contact-wrapper">
        <div id="vragen">
          <h2>Meest gestelde vragen</h2>
          <div id="betalen">
            <h3>Hoe moet ik betalen?</h3>
            <p>
              Wij zijn op dit moment druk bezig, met een online betalingssysteem. Maar geen zorgen! Bij ons staat jou kamer resrbering vast als je jouw reservering bevestigd en terug te zien is in 'mijn gereserveerde kamers'. Betalen doe je pas na je verblijf in de desbetreffende hotel.
            </p>
          </div>
          <div id="kosten">
            <h3>Komen er extra kosten bij?</h3>
            <p>
              Naast de kamer prijs hantern de meeste hotels toeristenbelasting. De hoogte van de toeristenbelasting verschilt per hotel. Hotels mogen zelf bepalen of zij toeristenbelasting heffen en hoe zij het taried berekenen. Bijvoorbeeld per overnachtingprijs. Elke gemeente kan de hoogte regelen in een eigen verordening. De verordening kunt u opvragen of inzien bij de desbetreffende hotel.
            </p>
          </div>
        </div>
        <div id="contact-gegevens">
          <h2>Contactgegevens</h2>
          <div id="adres">
            <h3>Adres</h3>
            <p>
              Hotel Booking BV <br>
              Amsterdamse veerkade 20 <br>
              2516 OG Den Haag <br>
              (070)- 9111120 <br>
              <br>
              U kunt gerust bellen!
              </p>
              <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=amsterdamse%20veerkade%2020&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
          </div>
        </div>
        <div id="andere-mogelijkheden">
          <h3>Andere contact mogelijkheden</h3>
          <div class="social">
            <img src="@/assets/messenger.png" alt="messenger">
            <p>messenger</p>
          </div>
          <div class="social">
          <img src="@/assets/phone-call.png" alt="phone-call">
            <p>bellen</p>
          </div>
          <div class="social">
          <img src="@/assets/twitter.png" alt="twitter">
            <p>twitter</p>
          </div>
          <div class="social">
          <img src="@/assets/email.png" alt="email">
            <p>mail</p>
          </div>
          <div class="social">
          <img src="@/assets/speech-bubble.png" alt="speech-bubble">
            <p>chat</p>
          </div>
          <div class="social">
          <img src="@/assets/whatsapp.png" alt="messenger">
            <p>app</p>
          </div>
        </div>
      </div>
    </main>

    <footerBar/>
  </div>
</template>

<script>
import navigationBar from '@/components/navigation-bar/navigation-bar.component.vue'
import footerBar from '@/components/footer-bar/footer-bar.component.vue'

export default {
  name: 'home',
  components: {
    navigationBar,
    footerBar
  }
}
</script>

<style>
.mapouter{position:relative;text-align:left;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:350px;width:350px;}

#uitgelichteHotels {
  height: 3vh;
  padding: 5px;
  background: #379683;
}
#uitgelichteHotels h2 {
  background: #379683;
  margin-left: 45px;
  color: white;
}

#contact-wrapper {
  display: grid;
  height: 82vh;
  grid-template-columns: 20% 1fr 1fr 1fr 20%;
  grid-template-rows: 50px 1fr 1fr;
  grid-template-areas:
  ". . . . ."
  ". vragen contact-gegevens andere-mogelijkheden ."
  ". . . . .";
}
#vragen {grid-area: vragen;}
#contact-gegevens {grid-area: contact-gegevens;}
#andere-mogelijkheden {grid-area: andere-mogelijkheden;}

h2 {
  margin-bottom: 15px;
  color: #05386B
}
h3 {
  margin-bottom: 5px;
  color: #05386B
}
p {
  margin-bottom: 20px;
  color: #05386B
}

#andere-mogelijkheden img {
  width: 30px;
  display: block;
  margin: auto;
}
.social {
  margin-right: 12px;
  float: left;
  text-align: center;
}
.social img {
  margin: auto;
}
.social p {
  font-size: 8pt;
}

@media screen and (max-width: 430px) {
  #contact-wrapper {
  display: grid;
  height: 82vh;
  grid-gap: 50px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
  "vragen"
  "contact-gegevens"
  "andere-mogelijkheden";
  }
  #vragen {
    padding: 20px;
  }
  #contact-gegevens {
    padding: 20px;
  }
  #contact-gegevens h2 {
    width: 100vw;
    padding: 5px;
    transform: translate(-20px, 0);
    background-color: #379683;
  }
}
</style>
