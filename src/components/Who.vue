<template>
  <div id="back" class="row text-center" style="width:105%; height:100%; position:fixed">
    <!-- 전체 백그라운드 이미지 추가하기 -->
    <div class="col-sm-4">
        <img src="../assets/white.jpg" alt="양동혁" width="400" height="550" style="margin-top:150px"> 
    </div>
    <div class="col-sm-4" style="vertical-align:middle">
      <div style="margin-top:250px">
        <next>
          <span>Backend Devloper</span>
          <br>
          <span class="light">양동혁</span>
          <br>
          <br>
          <span># Dongguk univ</span> 
          <br>
          <span># Multimedia Engineering</span> 
          <br>
          <span># SSAFY 5th</span>  
          <br>
          <span># NAVER FINANCIAL Intern</span>  
        </next>
      </div>
    </div>
    <div class="col-sm-4"/>
  </div>
</template>

<style>

#back{
  background-image: url('../assets/keyboard.png');
  background-repeat:no-repeat;
  background-size:cover;
}

next {
  font-family: 'Arial';
  color: #000;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
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
    opacity: 0;
  }
}

@keyframes flashText {
  to {
    opacity: 0.7;
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
