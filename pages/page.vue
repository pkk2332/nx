



<template>
	<div>
	<loading/></loading>
	<h1>this is page vue Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam recusandae natus accusantium, quidem culpa placeat similique delectus sapiente. Aperiam vel reiciendis reprehenderit maxime nesciunt nisi harum minus, similique possimus facere?</h1>
	<div v-for="x in somedata">
		<p>id - {{ x.id }}</p>
				<p>name - {{ x.name }}</p>
				<p>username - {{ x.username }}</p>
				<p>email - {{ x.email }}</p>
				<p>phone - {{ x.phone }}</p>
		
	</div>
</div>
</template>

<script>


import loading from "~/.nuxt/components/nuxt-loading"

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
	components:{
		loading
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