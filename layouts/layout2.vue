<template>
<div class="">
  <transition name="zoom">
    <navcom></navcom>
    </transition>
  <div class="container">
    <transition name="bounce">
    <nuxt/>
    </transition>
  </div></div>

</template>
<script>

  var navcom= ()=>import('~/components/navcom')
// import navcom from '~/components/navcom'
	export default {
    components: {
      navcom
    }
	
}
</script>
