<template>
  <div>
    <header class="container">
      <Nav>
      </Nav>
    </header>
    <Banner/>
    <Slider/>
  </div>
  
</template>

<script>
import Nav from './components/nav.vue'
import Banner from './components/banner'
import Slider from './components/sider'
export default {
  components:{
    Nav,
    Banner,
    Slider
  }
}
</script>

<style>

</style>
