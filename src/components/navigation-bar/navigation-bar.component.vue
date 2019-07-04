<template>
    <div id="nav">
      <h1>Hotel-booking.nl</h1>
      <div id="links">
      <router-link to="/">Home</router-link> |
      <router-link to="/gereserveerde-kamers">Mijn gereserveerde kamers</router-link> |
      <router-link to="/contact">Contact</router-link>
      </div>
    </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: 'calibri light';
}
#nav {
  width: 100%;
  height: 10vh;
  background: #05386B;
  color: white;
}
#nav h1 {
  float: left;
  line-height: 10vh;
  margin-left: 50px;
  font-size: 2rem;
}
#links {
  text-align: center;
  float: right;
  line-height: 10vh;
  margin-right: 50px;
}
#links a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
}

#nav a.router-link-exact-active {
  color: #379683;
}
@media screen and (max-width: 430px) {
  #nav h1 {
  float: none;
  line-height: 10vh;
  margin-left: 0;
  text-align: center;
  font-size: 2rem;
}
 #nav {
  width: 100%;
  height: 15vh;
  background: #05386B;
  color: white;
}
  #links {
    text-align: center;
    float: none;
    line-height: 0;
    margin-right: 0;
  }
  #links a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  
  }
}
</style>
