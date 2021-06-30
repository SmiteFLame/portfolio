<template>
  <div class="row text-center" style="width:100%">
    <div class="row">
      <div style="width: 30%; float:none; margin:0 auto" >
      <img src="../assets/white.jpg" alt="양동혁" width="400" height="550"> 
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
