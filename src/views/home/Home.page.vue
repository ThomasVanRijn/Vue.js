<template>
  <div class="home">
    <navigationBar/>

    <main>
      <div id="uitgelichteHotels">
        <h2>Uitgelicht hotels</h2>
      </div>
      <div id="hotelSearchbar">
        <searchHotelComponent/>
      </div>
      <div id="hotelInfo">
        <hotelInfoBoxComponent :hotels="this.hotelList"/>
      </div>
    </main>

    <footerBar/>
  </div>
</template>

<script>
import Api from '@/api/api'
import navigationBar from '@/components/navigation-bar/navigation-bar.component.vue'
import footerBar from '@/components/footer-bar/footer-bar.component.vue'
import searchHotelComponent from './components/search-hotel.component.vue'
import hotelInfoBoxComponent from './components/hotel-info-box.component.vue'

export default {
  
  name: 'home',
  components: {
    navigationBar,
    footerBar,
    searchHotelComponent,
    hotelInfoBoxComponent,
  },
  data: () => {
    return {
      hotelList: JSON.parse(localStorage.getItem('hotelList'))
    }
  }
}
</script>

<style>
body {
  background: #EDF5E1;
}
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
#hotelSearchbar {
  float: left;
  margin-left: 20px;
  position: absolute;
}
#hotelInfo {
  float: right;
}
</style>
