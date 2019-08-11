<template>
  <form id="form" @submit.prevent v-if="show">
    <h4 class="first">Be The First To Know About Our Amazing Discount</h4>
    <br />
    <br />
    <input type="text" placeholder="Full names" class="name" v-model="username" />
    <input type="text" placeholder="E-Mail" class="e-mail" v-model="email" />
    <button type="submit" class="submit" @click="submitForm">Subscribe</button>
    <br />
    <br />
    <br />
    <p class="last">We don't spam e-mails and you can also unsubscribe at anytime</p>
    <!-- <img src = "../assets/inputbanner.png"/> -->
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      show:false
    };
  },
  methods: {
    submitForm() {
      if ((this.email !== "") & (this.username !== "")) {
        console.log(this.email, "email");
        console.log(this.username, "username");
      } else {
        alert("Please fill in your Fullname and E-Mail");
        1;
      }
    }
  },
  created() {
    window.addEventListener("scroll", e => {
      if (window.scrollY >= 1287) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
  }
};
</script>

<style>
#form {
  background-image: url("../assets/inputbanner.png");
  height: 335px;
  color: white;
}
.first {
  text-align: center;
  padding-top: 150px;
}
.name {
  margin-right: 30px;
  margin-left: 330px;
  padding: 5px;
  width: 250px;
  border-radius: 50px;
  outline: none;
  background-color: transparent;
  border: 1px solid whitesmoke;
}
.e-mail {
  margin-right: 100px;
  margin-left: 30px;
  padding: 5px;
  width: 250px;
  border-radius: 50px;
  outline: none;
  background-color: transparent;
  border: 1px solid whitesmoke;
}
.submit {
  margin-right: 100px;
  margin-left: -60px;
  padding: 5px;
  width: 100px;
  border-radius: 50px;
  outline: none;
  background-color: green;
  border: none;
  cursor: pointer;
}
.last {
  text-align: center;
  font-size: 10px;
}
</style>
