<template>
  <div>
    <header class="container">
      <Nav>
      </Nav>
    </header>
    <Banner/>
    <Slider/>
    <Input/>
    <Flux/>
  </div>
  
</template>

<script>
import Nav from './components/nav.vue'
import Banner from './components/banner'
import Slider from './components/sider'
import Input from './components/input'
import Flux from './components/flux'
export default {
  components:{
    Nav,
    Banner,
    Slider,
    Input,
    Flux
  }
}
</script>

<style>

</style>
