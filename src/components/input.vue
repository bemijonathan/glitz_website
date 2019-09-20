<template>
  <div id="form">
    <h4 class="first">Be The First To Know About Our Amazing Discount</h4>
    <br />
    <br />
    <form @submit.prevent validate>
      <b-input placeholder="Full Name" v-model="username" rounded required></b-input>
      <b-input type="email" placeholder="E-Mail" v-model="email" rounded required></b-input>
      <button type="submit" class="button" @click="submitForm" rounded>Subscribe</button>
    </form>
    <br>
    <br>
    <br>
    <p class="last">We don't spam e-mails and you can also unsubscribe at anytime</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      username: ""
    };
  },
  methods: {
    submitForm() {
      if ((this.email !== "") & (this.username !== "")) {
        // console.log(this.email, "email");
        // console.log(this.username, "username");
      }
    }
  }
};
</script>

<style>
#form {
  background-image: url("../assets/inputbanner.png");
  background-repeat: no-repeat; 
  background-size: cover;
  min-height: 335px;
  color: white;
}

#form form {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}
#form .input::placeholder{
    color: white;
}
#form button{
    border-radius: 20px;
    background: rgb(11, 26, 11);
    color: white;
    border: none;
}
#form .input {
    background: transparent !important;
    outline:  none;
    color:white !important;
    border: 1px solid white;
}
#form .control,
#form button {
  margin: 0 15px;
  min-width: 250px;
  /* background: transparent !important; */
}
.first {
  text-align: center;
  padding-top: 100px;
}
.name {
  margin-right: 30px;
  margin-left: 330px;
  padding: 5px;
  width: 250px;
  border-radius: 50px;
  outline: none;
  background: transparent !important;
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
