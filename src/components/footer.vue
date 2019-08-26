<template>
  <div>
    <footer>
      <div class="container">
        <div>
          <li>About</li>
          <li>News</li>
          <li>Blog</li>
          <li>Contact</li>
          <li></li>
        </div>
        <div>
          <li>Digital Marketing</li>
          <li>Instagram</li>
          <li>Carreers</li>
        </div>
        <div>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Call: <a href="tel:+2349065485898"> +2349065485898 </a> </li>
          <li>or: <a href="tel:+2348141838266"> +2348141838266 </a> </li>
          <li>Twitter</li>
        </div>
        <!-- <div></div> -->
      </div>
      <div>
          <p> Glitz softwares (c) {{new Date().getFullYear()}} </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
footer {
  background: black;
  padding: 30px 0;
}
footer > div.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
footer li {
  color: white;
  list-style-type: none;
  margin-top: 20px;
}

footer div :not(.container){
    text-align: center;
}
footer p{
    color:white;
}
</style>