<template>
  <div>
    <header class="container">
      <Nav>
      </Nav>
    </header>
    <Banner/>
    <Slider/>
    <Input/>
  </div>
  
</template>

<script>
import Nav from './components/nav.vue'
import Banner from './components/banner'
import Slider from './components/sider'
import Input from './components/input'
export default {
  components:{
    Nav,
    Banner,
    Slider,
    Input
  }
}
</script>

<style>

</style>
