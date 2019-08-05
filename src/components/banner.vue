<template>
    <section>
        <div class="banner">

        </div>
        <div class="jumbotron">
            <div class="jumbotron-flex">
                <div>
                    <img src="../assets/about.png"/>
                   
                </div>
                <div class="about-text">
                    <h2>
                        About Us 
                    </h2>
                    <p>
                        The city of Xi’an, situated in the northwestern region of China, has long been known as the first capital of China and the resting place of the famous terra cotta soldiers. As the starting point of the Silk Road, however, the city also boasts a unique cuisine that combines Chinese and .... <a href="#"> Read more </a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.banner {
    max-width: 1440px;
    height:860px;
    background-image:url('../assets/banner.png'); 
    background-size: cover;
    background-position: center;
    
    /* margin-top: -60px; */
}
.jumbotron-flex img {
    width:350px;
}
.jumbotron{
    padding: 75px;
    max-width: 1088px;
    width: 100%;
    background: rgba(0, 0, 0, 0.932);
    min-height: 438px;
    margin: -100px auto 0 auto;
    border-radius: 10px;
}
.jumbotron-flex{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.about-text{
    max-width: 552px;
    margin: 15px
}
.jumbotron-flex h2 {
    color:#FFDD00;
    font-size: 25px;
    margin-bottom: 15px;
}
.jumbotron-flex p {
    color:white;
}
.jumbotron-flex a {
    color:#FFDD00;
}
</style>
