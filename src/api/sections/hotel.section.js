import Hotel from '@/models/hotel.model'

// This is approach one, without async, await.
export default class HotelSection {
    http = null;

    constructor (http) {
      // This will make sure that we could use stubs or other http clients.
      this.http = http
    }

    fetchAll () {
      // Return the data you want to use instead of the response.
      // This will make the development experience better.
      return this.http.get('hotels')
        .then(response => response.data.map(item => Hotel.fromJSON(item)))
    }
}
