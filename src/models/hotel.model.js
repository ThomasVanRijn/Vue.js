export default class Hotel {
    image = ''

    name = ''

    stad = ''

    land = ''

    continent = ''

    static fromJSON (params) {
      const newHotel = new Hotel()

      newHotel.image = params.image
      newHotel.name = params.name
      newHotel.stad = params.stad
      newHotel.land = params.land
      newHotel.continent = params.continent

      return newHotel
    }
}
