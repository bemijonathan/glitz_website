<template>
  <div class="slider">
    <h3 align="center">PORTFOLIO</h3>
    <div class="slider-holder container">
      <div class="slides">
        <Flux/>
      </div>
    </div>
  </div>
</template>

<script>
import Flux from './flux'
export default {
  components:{
    Flux
  },
  data() {
    return {
      slider: [
        { img: "/images/about.png", link: "bags.com" },
        { img: "/images/about.png", link: "bags.com" },
        { img: "/images/about.png", link: "bags.com" },
        { img: "/images/about.png", link: "bags.com" },
        { img: "/images/about.png", link: "bags.com" },
        { img: "/images/about.png", link: "bags.com" }
      ]
    };
  }
};
</script>

<style>
.slides {
  /* display: grid;
  grid-template-columns: 700px 700px 700px 700px 700px 700px ; 
  overflow: auto !important; */
  padding-bottom: 100px;
  grid-gap: 100px;
  max-width:950px;
  margin: auto;
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
  min-height: 300px;
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
