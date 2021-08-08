<template>
  <div id ="app">
    <Menu></Menu>
    <router-view msg="Welcome to Your Vue.js App" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');

#app {
  font-family: 'Noto Sans KR', sans-serif;
}

body {
  background: #fff;
}

</style>

<script>
import Menu from './components/header/menu.vue'

export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>
