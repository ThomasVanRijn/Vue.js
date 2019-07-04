<template>
  <li>
    <h4>{{ hotel.stad }}</h4>
    <h5>{{ hotel.land }}, {{ hotel.continent }}</h5>
  </li>
</template>

<script>
export default {
  name: 'hotel-item-component',
  props: ['hotel']
}
</script>

<style scoped>
li {
  /* background: red; */
  list-style-type: none;
  border-bottom: 1px solid black;
  padding: 10px;
}
h4 {
  text-align: center
}
h5 {
  margin: 5px;
  text-align: center
}
</style>
