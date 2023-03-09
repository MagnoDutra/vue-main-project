<template>
  <the-heading></the-heading>
  <router-view></router-view>
</template>

<script>
import TheHeading from './components/layout/TheHeading.vue';

export default {
  components: {
    TheHeading,
  }
}
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}
body{
  margin: 0;
}
</style>
