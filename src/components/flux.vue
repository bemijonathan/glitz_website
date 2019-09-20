<template>
  <div>
    <div id="example container">
      <carousel-3d :inverse-scaling="1500" :space="800">
        <slide v-for="(slide, i) in slides" :key="i" :index="i">
          <img :src="slide.image" style="height: 275px;object-fit: cover;" />
          <p class="title" style="color:black;margin-bottom:0.7rem" align="center">{{slide.title}}</p>
          <p align="center" v-if="slide.link !== '#' "><a :href="slide.link" class="button"> View </a></p>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {
      slides: [
        {image:"/images/DoggyGram.png", link:"#", title:"Doggy Gram"},
        {image:"/images/port.png",link:'https://www.canva.com/design/DADlMq-A_bs/e0Zh7wrlBc7tk38lcU518A/view?website#4:my-services:6', title:"Sia's Portfolio"},
        {image:"/images/glitz_planner.png",link:'#', title:"Glitz Planner"},
        {image:"/images/crypto_base.png",link:'#', title:" Crypto Base"}
      ]
    };
  },
  created() {
    anime({
      targets: ".line-drawing-demo .lines path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function(el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true
    });
  }
};
</script>

<style>
.carousel-3d-slide, .carousel-3d-slider[data-v-c06c963c], .carousel-3d-container{
    height:380px !important;
}
.carousel-3d-slide{
  max-width: 362px !important;
}
#example .title{
  margin-bottom:0.7rem !important;
}
</style>