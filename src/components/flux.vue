<template>
  <div>
    <div id="example container">
      <carousel-3d :inverse-scaling="1500" :space="800">
        <slide v-for="(slide, i) in slides" :key="i" :index="i">
          <img :src="slide" width="200" />
          <p class="title" style="color:black" align="center">You know</p>
          <p align="center"><button class="button"> View </button></p>
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
        "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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

</style>