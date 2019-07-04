<template>
  <div id="searchBox">
    <input
      type="search"
      v-model="searchText"
      id="search"
      placeholder="Search..."
      @keydown="$emit('searched', searchText)"
    >
    <i class="fas fa-search fa-2x"></i>
  </div>
</template>

<script>
export default {
  name: 'search-box-component',
  data: () => ({
    searchText: ''
  })
}
</script>

<style>
#searchBox input{
  width: 85%;
  height: 40px;
  border-radius: 10px;
  margin: 5px;
}
#searchBox i{
  transform: translateY(5px)
}
</style>
