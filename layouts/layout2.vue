<template>
  <div class="container">
    <h1>Special layout </h1>
      <nuxt-link to="/">home</nuxt-link>
    <nuxt-link to="/page">page</nuxt-link>
    <transition name="bounce">
    <nuxt/>
    </transition>
  </div>
</template>
<script>

	export default {
	
}
</script>
