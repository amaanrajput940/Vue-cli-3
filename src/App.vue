<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
	<header>
	<div class="logo"><img alt="Vue logo" src="./assets/logo.png"></div>
	<ul class="nav">
		<!-- use router-link component for navigation. -->
		<!-- specify the link by passing the `to` prop. -->
		<!-- `<router-link>` will be rendered as an `<a>` tag by default -->
	    <li><router-link to="/">Home</router-link></li>
		<li><router-link to="/blog">Blog</router-link></li>
		<li><router-link to="/about">About Me</router-link></li>
	</ul>
	</header>

	<div>
		<!-- route outlet -->
		<!-- component matched by the route will render here -->
	<router-view></router-view>
	</div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style>
body{
	padding: 15px;
}
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&subset=latin-ext,vietnamese');
#app {
  font-family: 'Nunito Sans', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.thin{
	font-weight: 300;
}
header{
	display: flow-root;
	width:100%;
}
.logo{
float:left;
	max-width: 60px;
}
.logo img{
   max-width: 100%;
}
ul.nav{
	float:right;
}
ul.nav li {
	display: inline-flex;
	margin: 0px 15px;
	text-decoration: none;
}
ul.nav li a{
	text-decoration: none;
	color: inherit;
}
ul.nav li a:hover{
	color: #000000;
}
	.posts a{
		color: #2c3e50;
		text-decoration: none;
	}
.posts a:hover{
	color:#000000;
}
</style>
