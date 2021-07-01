<template>
  <div class="row text-center" style="width:100%; height:100%">
    <div class="col-sm-3"/>
    <div class="col-sm-6" style="vertical-align:middle">
        <h2>기본적인 자기소개 페이지 추가하기</h2>
        <img src="../assets/white.jpg" alt="양동혁" width="400" height="550"> 
        <h2>정말 기본적인 디자인을 추가하여 넣기</h2>
    </div>
    <div class="col-sm-3"/>
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
