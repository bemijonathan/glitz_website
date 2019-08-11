<template>
  <div class="slider" ref="slider" @scroll="sliding">
    <h3 align="center">PORTFOLIO</h3>
    <div class="slider-holder container">
      <div v-for="(slide, index) in 10 " :key="index" img :class="{'hide': index === counter}">
        <!-- <img :src="slide.img"/> gleit -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods:{
    sliding(){
      console.log(this.counter)
      this.counter+=1
    }
  }
};
</script>

<style>
.hide{
  opacity: 0;
}
.slides {
  display: grid;
  grid-template-columns: 700px 700px 700px 700px 700px 700px ; 
  overflow: auto !important;
  grid-gap: 100px;
  max-width:950px;
  margin: auto;
}
[img] {
  height: 80vh;
  background: green;
  margin-bottom: 100px;
  cursor: url('https://1.bp.blogspot.com/-Cn01291Hy9w/WLuhGT70iBI/AAAAAAAAVBY/4vDEYJKBWOYcBsmCEjhEfZ5m9TSHaaT-gCLcB/s1600/dreamer-emoji.gif') !important;
}
.slides::-webkit-scrollbar {    display: hidden;}
.single_slide {
  background-size: cover;
    background-position: center;
    width: 100%;
    background-repeat: no-repeat;
    height: 300px;
    margin: 30px;
}
.slider {
  height: 100vh;
  overflow: scroll;
  background: #0000009d;
  margin-top: -100px;
}
.slider h3 {
  padding-top: 20px;
  color: black;
  font-weight: bolder;
  font-size: 38px;
}
</style>
