<template>
  <div>
    <div id="hotelInfoBox">
      <div id="image">
        <img :src="hotelList[0].image" alt="image">
      </div>

      <div id="hotelName">
        <h3>{{ hotelList[0].name }} - {{ hotelList[0].stad }}</h3>
        <p>{{ hotelList[0].stad }}, {{ hotelList[0].land }}</p>
      </div>

      <div id="faciliteiten">
        <p v-for="(faciliteit, key) in faciliteiten" :key="key">
          {{ faciliteit }}
        </p>
      </div>

      <div id="prijs">
        <h5>Vanaf</h5>
        <h4>&euro;101,- p.p.p.n.</h4>
        <button>Lees meer</button>
      </div>
    </div>
    <div id="hotelInfoBox">
      <div id="image">
        <img :src="hotelList[1].image" alt="image">
      </div>

      <div id="hotelName">
        <h3>{{ hotelList[1].name }} - {{ hotelList[1].stad }}</h3>
        <p>{{ hotelList[1].stad }}, {{ hotelList[1].land }}</p>
      </div>

      <div id="faciliteiten">
        <p v-for="(faciliteit, key) in faciliteiten" :key="key">
          {{ faciliteit }}
        </p>
      </div>

      <div id="prijs">
        <h5>Vanaf</h5>
        <h4>&euro;101,- p.p.p.n.</h4>
        <button>Lees meer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hotelInfoBox',
  data: () => {
    return {
      hotelList: [],
      faciliteiten: ['Wifi','Restaurant','Fitness','Zwembad','Naast het station',]
    }
  },
  created () {
    this.hotelList = JSON.parse(localStorage.getItem('hotelList'))
  }
}
</script>

<style>
#hotelInfoBox {
  width: 1498px;
  height: 300px;
  margin: 50px;
  background: white;
  border: 1px solid grey;
}
#image, #image img {
  width: 498px;
  height: 100%;
  float: left;
}
#hotelName {
  width: 980px;
  padding: 10px;
  float: right;
}
#faciliteiten {
  width: 650px;
  height: 240px;
  float: left;
  
}
#prijs {
  width: 350px;
  height: 240px;
  float: left;
}
#prijs h5 {
  font-size: 2rem;
}
#prijs h4 {
  font-size: 3rem;
}
#prijs button {
  width: 80%;
  height: 50px;
  margin: auto;
  display: block;
  font-size: 1.8rem;
}
</style>
