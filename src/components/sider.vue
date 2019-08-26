<template>
  <div class="nice-background" id="portfolio">
    <h3 align="center" style="font-size:35px;font-weight:bolder;color:black">PORTFOLIO</h3>
    <!-- <div class="grid">
      <div class="small_box" v-for="x in 1000" :key="x"></div>
    </div>
    <div class="grid-shadow">
      <div class="small_box el" v-for="x in 1000" :key="x"></div>
    </div>-->
    <div class="slider">
      <div class="slider-holder container">
        <div class="slides">
          <Flux />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Flux from "./flux";
import anime from "animejs";
export default {
  components: {
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
  },
  methods: {
    animatemouse() {
      anime({
        targets: ".grid .small_box",
        scale: [
          { value: 0.1, easing: "easeOutSine", duration: 500 },
          { value: 1, easing: "easeInOutQuad", duration: 500 }
        ],
        delay: anime.stagger(200, { grid: [14, 150], from: "center" }),
        loop: true
      });
    }
  }
};
</script>

<style>
.nice-background {
  position: relative !important;
  min-height: 300px !important;
  background: rgba(11, 26, 11, 0.582);
  margin-top: -100px !important;
}
.grid,
.grid-shadow {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.grid {
  position: absolute;
  z-index: -1;
  top: 0;
}
.grid-shadow {
  position: absolute;
  z-index: -2;
  top: 0;
}
.small_box {
  height: 20px;
  width: 20px;
  opacity: 0.7;
  background: black;
  margin: 3px;
}
.el {
  height: 20px;
  opacity: 0.2;
  width: 20px;
  background: black;
  margin: 3px;
}

.slides {
  /* display: grid;
  grid-template-columns: 700px 700px 700px 700px 700px 700px ; 
  overflow: auto !important; */
  padding-bottom: 100px;
  grid-gap: 100px;
  max-width: 950px;
  margin: auto;
}
.slides::-webkit-scrollbar {
  display: hidden;
}
.single_slide {
  background-size: cover;
  background-position: center;
  width: 100%;
  background-repeat: no-repeat;
  height: 300px;
  margin: 30px;
}
.slider {
  /* min-height: 300px;
  background: #0000009d;
  margin-top: -100px; */
}
.slider h3 {
  padding-top: 20px;
  color: black;
  font-weight: bolder;
  font-size: 38px;
}

@media screen and (max-width: 1300px) {
  .blog_containers div {
    width: 200px;
  }
  .nice-background {
    position: relative !important;
    min-height: 300px !important;
    background: rgba(11, 26, 11, 0.582);
    margin-top: 30px !important;
  }
  .nice-background h3 {
    padding-top: 25px;
  }
  .nice-background {
    padding: 10px;
  }
  form input {
    margin-bottom: 20px;
  }
  #form h4 {
    padding-top: 50px;
  }
  .slides {
    padding-bottom: 0;
  }
  .blog_containers {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 30px;
    width: 100%;
    overflow: scroll;
  }
}

@media screen and (max-width: 1023px) {
  .navbar-menu.is-active {
    display: block;
    position: absolute;
    width: 100%;
    height: 100vh;
        top: 0;
    z-index: -1;
    padding-top: 30%;
  }
  .navbar-menu {
    background-color: #000000c9 !important;
  }
  a.navbar-item {
    color: white !important;
    text-align: center;
    margin: 20px;
    font-size: 20px;
    font-weight: bold;
}
.navbar-burger.burger{
  color:white !important;
}
a.navbar-item:first-of-type{
  margin: 0;
}
.navbar{
  background: rgb(108, 108, 108) !important; 
}
}
</style>
