<template>
  <section>
    <div class="banner">
      <div class="container"> {{scroll}}
        <div class="banner-text" style="min-width:600px; padding-right:30px;">
          <h1>Make The Shift From Now To Next.</h1>
          <h3>We merge imagination and technology to help brands grow in an age of digital transformation.</h3>
          <div style="margin-top:30px">
            <button class="button">Work With Us</button>
          </div>
        </div>
        <div class="compound_circles">
          <div class="circle1" refs="circle">
            <div class="circle2">
              <div class="circle3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jumbotron">
      <div class="jumbotron-flex">
        <div>
          <img src="../assets/about.png" />
        </div>
        <div class="about-text">
          <h2>About Us</h2>
          <p>
            The city of Xi’an, situated in the northwestern region of China, has long been known as the first capital of China and the resting place of the famous terra cotta soldiers. As the starting point of the Silk Road, however, the city also boasts a unique cuisine that combines Chinese and ....
            <a
              href="#"
            >Read more</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import anime from "animejs";

export default {
  data(){
    return {
      show: false
    }
  },
  methods: {
    addscrollanimation() {
      anime({
        targets: ".jumbotron",
        opacity:1,
        easing: "easeInOutSine",
        translateY:-150,
        duration: 1000
      });
    },
    removeanimation(){
      anime({
        targets: ".jumbotron",
        opacity:0,
        translateY:50,
        easing: "easeInOutSine",
        delay: 800,
        duration: 0
      });
    },
    animatesircles() {
      anime({
        targets: ".banner",
        backgroundColor: "#6c6c6c",
        easing: "linear",
      });

      anime({
        targets: ".circle3",
        right: 40,
        // easing: "easeOutBounce",
        delay: 1090,
        rotate: {
          value: "+=1turn", // 0 + 2 = '2turn'
          duration: 2000,
          easing: "easeInOutSine"
        },
        direction: "alternate"
      });
      anime({
        targets: ".circle1",
        "margin-right": "-120px",
        easing: "linear",
        delay: 1000,
        opacity: 1,
        duration: 2000
      });
    }
  },
  computed: {
    scroll(){
      if (this.show){
        this.addscrollanimation()
      }else {
        this.removeanimation()
      }
    }
  },
  mounted() {
    this.animatesircles();
  },
  created() {
    window.addEventListener("scroll", e => {
      console.log(window.scrollY)
      if (window.scrollY >= 300 && window.scrollY < 1000) {
        this.show = true;
      }else{
        this.show = false
      }
    });
  }
};
</script>

<style>
.banner-text button {
  background: rgba(235, 55, 55, 0.829);
  border-radius: 30px;
  border: none;
  color: black;
  width: 250px;
  height: 55px;
}
.banner-text {
  color: white;
}
.banner-text h1 {
  font-size: 58px;
  font-weight: 200;
  line-height: 1.5;
}
.circle3 {
  width: 573px;
  height: 573px;
  background-image: url("../assets/circle3.png");
  background-position: center;
  background-size: cover;
  float: right;
  position: absolute;
  top: 3%;
  right: -40px;
}
.circle2 {
  width: 600px;
  height: 600px;
  background: rgba(255, 246, 246, 0.144);
  border-radius: 100%;
  float: right;
  margin: 10% 0;
  position: relative;
  /* overflow: hidden; */
  margin-right: 20px;
}
.circle1 {
  width: 737px;
  height: 737px;
  background: #36313193;
  overflow: hidden;
  border-radius: 100%;
  float: right;
  /* margin: 5% 0; */
  margin-right: 100vw;
  opacity: 0;
}
.compound_circles {
  height: 100%;
}
.banner .container {
  align-items: center;
  display: flex;
}
.banner {
  position: relative;
  /* display: flex; */
  overflow: hidden;
  max-width: 1440px;
  margin: auto;
  height: 880px;
  /* background-color: #6c6c6c; */
}
.jumbotron-flex img {
  width: 350px;
}
.jumbotron {
  transform:translateY(-50);
  padding: 75px;
  max-width: 1088px;
  width: 100%;
  opacity: 0;
  background: rgba(0, 0, 0, 0.932);
  min-height: 238px;
  margin: 30px auto 0 auto;
  border-radius: 10px;
}
.jumbotron-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.about-text {
  max-width: 552px;
  margin: 15px;
}
.jumbotron-flex h2 {
  color: #ffdd00;
  font-size: 25px;
  margin-bottom: 15px;
}
.jumbotron-flex p {
  color: white;
}
.jumbotron-flex a {
  color: #ffdd00;
}
</style>
