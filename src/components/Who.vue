<template>
  <div class="row text-center" style="width:100%; height:100%">
    <!-- 전체 백그라운드 이미지 추가하기 -->
    <div class="col-sm-2"/>
    <div class="col-sm-4">
        <img src="../assets/white.jpg" alt="양동혁" width="400" height="550" style="margin-top:150px"> 
    </div>
    <div class="col-sm-4" style="vertical-align:middle">
      <div style="margin-top:250px">
        <h2>
          <span>Devloper</span>
          <br>
          <span class="light">양동혁</span>
          <br>
          <br>
          <span>DongHyeok Yang</span> 
          <br>
          <span># Dongguk univ</span> 
          <br>
          <span># Multimedia Engineering</span> 
          <br>
          <span># SSAFY 5th</span>  
        </h2>
      </div>
    </div>
    <div class="col-sm-2"/>
  </div>
</template>

<style>
h2 {
  font-family: 'Arial';
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3rem;
  line-height: 0.75;
}

span {
  display: block;
}

span:not(.light) {
  opacity: 0;
  animation: flashText .5s ease-out alternate infinite;
}

span.light {
  position: relative;
  display: inline-block;
  
  &:before {
    position: absolute;
    left: 0;
    top: -10%;
    width: 100%;
    height: 120%;
    background: #fff;
    filter: blur(10px);
    content: "";
    opacity: 0;
    animation: flash .5s ease-out alternate infinite;
  }
}

@keyframes flash{
  to {
    opacity: 1;
  }
}

@keyframes flashText {
  to {
    opacity: 0.15;
  }
}
</style>

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
