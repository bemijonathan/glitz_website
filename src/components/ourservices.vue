<template>
  <div class="service_container">
    <h1>OUR SERVICES</h1>
    <div class="services">
      <div v-for="(service, i) in services" :key="i">
        <div class="service">
          <h1>{{service.title}}</h1>
          <div>{{service.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "WEB DESIGN AND DEVELOPMENT",
          description:
            "We design and develop market leading websites softwares and apps that deliver a great first service and wow your cutomers.."
        },
        {
          title: "E-COMMMERCE",
          description:
            "We deliver professionally crafted, secure and simple online stores with multiple selling and payment options"
        },
        {
          title: "DIGITAL MARKETING",
          description:
            "Targeted and results driven digital marketing that increases brand awearness, quality business enquiries and visitor footfall "
        }
      ]
    };
  }
};
</script>

<style>
.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
}
.service_container {
  margin-top: -100px;
}

@media screen and (max-width: 1300px) {
  .service_container {
    margin-top: 100px;
  }
}
.service {border-radius: 10px;
  /* margin-top: -150px; */
  max-width: 300px;
  padding: 20px;
  box-sizing: border-box;
  height: 200px;
  margin: 10px;
  background: #dbdbdb;
  text-align: center;
  margin-bottom: 50px;
}
.service_container h1 {
  text-align: center;
  font-size: 24px;
}
</style>