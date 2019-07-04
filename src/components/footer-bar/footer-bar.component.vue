<template>
  <div id="footer">
    <h1>&copy; Copyright 2019 ROC MONDRIAAN - APPLICATIEONTWIKKELAAR</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #footer {
    background: #379683;
    width: 100%;
    height: 5vh;
    text-align: center;
    line-height: 5vh;
    position: fixed;
    bottom: 0;
  }
  h1 {
    color: white;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 430px) {
    #footer {
      background: #379683;
      width: 100%;
      height: 5vh;
      text-align: center;
      line-height: 5vh;
    }
    h1 {
    color: white;
    font-size: 1rem;
  }
  }
</style>
