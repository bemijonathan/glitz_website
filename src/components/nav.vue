<template>
    <b-navbar class="transparent container" >
        <template slot="brand">
            <b-navbar-item href="/">
                <img src="../assets/logo.png">
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                About Us 
            </b-navbar-item>
            <b-navbar-item href="#">
                Portfolio
            </b-navbar-item>
            <b-navbar-item href="#">
                Partners
            </b-navbar-item>
            <b-navbar-item href="#">
                Contact Us
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {

}
</script>

<style>
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
