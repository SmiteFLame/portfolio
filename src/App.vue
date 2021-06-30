<template>
  <div id ="app">
    <Menu></Menu>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Menu from './components/header/menu.vue'

export default {
  name: "App",
  components: {
    HelloWorld, Menu,
  },
};
</script>
