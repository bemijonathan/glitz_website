<template>
    <b-navbar class="transparent container" >
        <template slot="brand">
            <b-navbar-item href="/">
                <img src="../assets/logo.png" width="75">
            </b-navbar-item>
        </template>
        <template slot="end">
            <!-- <b-navbar-item href="#">
                <span @click="closeModal"> Home </span>
            </b-navbar-item> -->
            <b-navbar-item   href="#about">
                <span @click="closeModal"> About Us </span>
            </b-navbar-item>
            <b-navbar-item href="#portfolio">
                 <span @click="closeModal"> Portfolio</span>
            </b-navbar-item>
            <b-navbar-item href="#partner">
                 <span @click="closeModal"> Partners</span>
            </b-navbar-item>
            <b-navbar-item href="#contact">
                <span @click="closeModal">  Contact Us </span>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    data(){
        return{

        }
    }, 
    methods:{
        closeModal(){
            let close = document.querySelector('.navbar-burger.burger.is-active')
            close.click()
        }
    },
}
</script>

<style>
a.navbar-item{
    color:black !important;
}
.transparent{
    background:transparent !important;
    position: fixed !important;
    top:0;
    width: 100% !important;
}
a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, .navbar-link.is-active{
    background: transparent !important;
}

</style>
