



<template>
	<div>

	<div v-for="x in somedata">
		<p>id - {{ x.id }}</p>

				<p> <nuxt-link :to="'/user/'+x.id">name - {{ x.name }}</nuxt-link></p>
				<p>username - {{ x.username }}</p>
				<p>email - {{ x.email }}</p>
				<p>phone - {{ x.phone }}</p>
		
	</div>
</div>
</template>

<script>


export default {
	data(){
		return{
			somedata:null
		}
	},
	mounted(){
		console.log()
	},
	async asyncData({ $axios }) {

  const ip = await $axios.$get('https://jsonplaceholder.typicode.com/users')
   return {somedata:ip}
},

	layout:'layout2',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>