<template>
  <div>
    <div id="example container">
      <carousel-3d :inverse-scaling="1500" :space="800">
        <slide v-for="(slide, i) in slides" :key="i" :index="i">
            <img :src="slide"/>
          <span class="title">You know</span>
          <p>You know, being a test pilot isn't always the healthiest business in the world.</p>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide
  },
  data(){
      return{
          slides:[
              'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          ]
      }
  }
};
</script>

<style>
</style>