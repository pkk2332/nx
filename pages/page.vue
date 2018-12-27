<template>
	<div>
	
		<h1>this is page vue Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam recusandae natus accusantium, quidem culpa placeat similique delectus sapiente. Aperiam vel reiciendis reprehenderit maxime nesciunt nisi harum minus, similique possimus facere?</h1>
		<div v-for="(x,index) in somedata">

			<p>id - {{ x.id }}</p>
			<p>name - {{ x.name }}</p>

			<img :src="'https://loremflickr.com/320/240/paris,girl/all?random='+index" alt="">
			<p>email - {{ x.email }}</p>

		</div>
			
		<div class="" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" >
		</div>
	</div>
</template>

<script>
	export default {

		layout:'layout2',
		data(){
			return{
				somedata:null,
				busy: false,

			}
		},
		methods:{
		async loadMore(){
				         this.$nuxt.$loading.start()

				const ip = await this.$axios.$get('http://localhost:8000/api/get')
				this.$nuxt.$loading.finish()
				console.log(ip)


			}
		},
mounted () {

  },
		async asyncData({ $axios }) {
			
			const ip = await $axios.$get('http://localhost:8000/api/get')

			return {somedata:ip}
		}
		
	}
</script>

<style lang="css" scoped>
</style>