const hotelStub = {
  get: (url, data) => {
    const stub = {
      data: [
        { image: require('@/assets/babylon-hotel.jpg'), name: 'Babylon Hotel', stad: 'Den Haag', land: 'Nederland', continent: 'Europa' },
        { image: require('@/assets/babylon-hotel.jpg'), name: 'Babylon Hotel', stad: 'Amsterdam', land: 'Nederland', continent: 'Europa' },
        { image: require('@/assets/babylon-hotel.jpg'), name: 'Babylon Hotel', stad: 'Rotterdam', land: 'Nederland', continent: 'Europa' },
        { image: require('@/assets/babylon-hotel.jpg'), name: 'Babylon Hotel', stad: 'Dubai', land: 'Verenigde Arabische Emiraten', continent: 'Azie' },
        { image: require('@/assets/babylon-hotel.jpg'), name: 'Babylon Hotel', stad: 'Turijn', land: 'Italie', continent: 'Europa' },
        { image: require('@/assets/babylon-hotel.jpg'), name: 'Babylon Hotel', stad: 'Denpasar', land: 'Indonesie', continent: 'Azie' },
        { image: require('@/assets/babylon-hotel.jpg'), name: 'Babylon Hotel', stad: 'London', land: 'Verenigd Koningkrijk', continent: 'Europa' },
        { image: require('@/assets/babylon-hotel.jpg'), name: 'Babylon Hotel', stad: 'Rome', land: 'Italie', continent: 'Europa' },
        { image: require('@/assets/babylon-hotel.jpg'), name: 'Babylon Hotel', stad: 'New York', land: 'Verenigde staten', continent: 'Amerika' }
      ]
    }

    return Promise.resolve(stub)
  }
}

export default hotelStub
