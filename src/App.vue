<template>
  <div>
    <header class="container">
      <Nav>
      </Nav>
    </header>
    <Banner/>
    <Services/>
    <Slider/>
    <span id="contact"></span>
    <Input/>
    <Insight/>
    <Footer/>
  </div>
  
</template>

<script>
import Services from './components/ourservices'
import Insight from './components/insights'
import Nav from './components/nav.vue'
import Banner from './components/banner'
import Slider from './components/sider'
import Input from './components/input'
import Flux from './components/flux'
import Footer from './components/footer'
export default {
  components:{
    Nav,
    Banner,
    Slider,
    Input,
    Flux,
    Insight,
    Footer,
    Services
  }
}
</script>

<style>

</style>
