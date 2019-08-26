<template>
  <div class="container" id="partner">
    <h1
      style="color:red; text-align:center;font-size:35px; font-weight:500;margin-top:30px;"
    >PARTNERS</h1>
    <div class="flex-container">
      <div class="blog_containers">
        <div v-for="(insight, index) in insights" :key="index">
          <div>
            <img :src="insight.image" width="200" />
            <p align="center">{{insight.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      insights: [
        {
          title: "Title",
          image: "/images/banner.png",
          description: " situated in the nort  As the starting point",
          link: "#"
        },
        {
          title: "Title",
          image: "/images/banner.png",
          description: " situated in the nort  As the starting point",
          link: "#"
        },
        {
          title: "Title",
          image: "/images/banner.png",
          description: " situated in the nort  As the starting point",
          link: "#"
        },
        {
          title: "Title",
          image: "/images/banner.png",
          description: " situated in the nort  As the starting point",
          link: "#"
        },
        {
          title: "Title",
          image: "/images/banner.png",
          description: " situated in the nort  As the starting point",
          link: "#"
        },
        {
          title: "Title",
          image: "/images/banner.png",
          description: " situated in the nort  As the starting point",
          link: "#"
        }
      ],
      counter: 0,
      show: false
    };
  },
  methods:{

  },
  computed: {
    scroll() {
      if (this.show) {
        this.addscrollanimation();
      } else {
        this.removeanimation();
      }
    }
  },
  created() {
    window.addEventListener("scroll", e => {
      console.log(window.scrollY);
      if (window.scrollY >= 2034) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
  }
};
</script>

<style>
.blog_containers {
  display: flex;
  padding-bottom: 30px;
  flex-wrap: wrap;
}
.blog_containers div {
  margin: 20px;
}
</style>