<template>
  <div id="searchComponent">

    <div id="inputWrapper">
      <SearchBoxComponent @searched="setSearchText" />
    </div>

    <div id="hotelList">
      <hotel-item-component v-for="(hotel, key) in filteredHotels" :key="key" :hotel="hotel"/>
    </div>

  </div>
</template>

<script>
import Api from '@/api/api'
import hotelItemComponent from './hotel-item.component.vue'
import SearchBoxComponent from './search-box.component.vue'

export default {
  name: 'search-hotel',
  components: {
    hotelItemComponent,
    SearchBoxComponent
  },
  data: () => {
    return {
      searchText: '',
      hotels: []
    }
  },
  async created () {
    this.hotels = await Api.Hotel.fetchAll()
  },
  updated () {
  },
  computed: {
    filteredHotels () {
      return this.hotels.filter((hotel) => {
        const stad = hotel.stad.toLowerCase()
        const land = hotel.land.toLowerCase()
        const continent = hotel.continent.toLowerCase()

        const searchText = this.searchText.toLowerCase().trim()

        return stad.includes(searchText) || land.includes(searchText) || continent.includes(searchText)
      })
    }
  },
  methods: {
    setSearchText (value) {
      this.searchText = value
      localStorage.setItem('hotelList', JSON.stringify(this.filteredHotels))
    }
  }
}
</script>

<style>
#searchComponent {
  width: 300px;
}
#hotelList {
  height: 80vh;
  border: 2px solid black;
}
</style>
