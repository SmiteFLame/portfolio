<template>
  <div id="back" class="row text-center"  style="width:100%; height:100%; position:fixed">
    <div class="col-sm-4">
      <br>
      <h1 class="title">학력</h1>
      <hr>
      <h2 class="title">광운초등학교</h2>
      <h4> 2003.03 - 2009.02</h4>
      <h2 class="title">서울신일중학교</h2>
      <h4> 2009.03 - 2012.02</h4>
      <h2 class="title">서울대학교사범대학부설고등학교</h2>
      <h4> 2012.03 - 2015.02</h4>
      <h2 class="title">동국대학교 멀티미디어공학과 학사과정</h2>
      <h4> 2015.03 - 2021.02</h4>
    </div>
    <div class="col-sm-4">
      <br>
      <h1 class="title">교육 / 인턴</h1>
      <hr>
      <h2 class="title">동국대학교 게임 및 로봇 지능 연구실</h2>
      <h4> 2019.06 - 2019.12</h4> 
      <h2 class="title">VIZINF 학부생 인턴</h2>
      <h4> 2020.07 - 2020.07</h4>
      <h2 class="title">삼성 청년 SW 아카데미</h2>
      <h4> 2021.01 - 2021.08</h4>
      <h2 class="title">네이버 파이낸셜 백앤드 인턴</h2>
      <h4> 2021.08 - 2021.10</h4>
    </div>
    <div class="col-sm-4">
      <br>
      <h1 class="title">자격증</h1>
      <hr>
      <h2 class="title">OPIc IM2</h2>
      <h4> 2020.01.30</h4>
      <h2 class="title">컴퓨터활용능력 1급</h2>
      <h4> 2020.09.18</h4>
      <h2 class="title">정보처리기사</h2>
      <h4> 2020.12.31</h4>
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');

#back{
  background-image: url('../assets/whiteback.jpg');
  background-repeat:no-repeat;
  background-size:cover;
}

h2 {
  margin: 40px 0 0;
}
.title{
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  color:eee;
}


</style>
