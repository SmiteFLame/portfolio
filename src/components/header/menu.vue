<template>
	<div>
		<nav class="navbar navbar-expand-sm bg-navbar-light">
			<ul class="nav  justify-content-center">
				<li class="nav-item"><router-link class="nav-link" to="/boardlist">WHO</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/boardlist">ABOUT</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/boardlist">RESUME</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/boardlist">PORTFOLIO</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/boardlist">SERVICE</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/boardlist">CONTACT</router-link></li>
			</ul>
		</nav>
	</div>
</template>

<style>
.navbar .navbar-nav {
  display: inline-block;
  float: none;
}

.navbar .navbar-collapse {
  text-align: center;
}
</style>
