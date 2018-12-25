<template>
	
<div>
	<p>aaa-{{ xx.id }}</p>
</div>

</template>


<script>
	
	export default {
		data(){
			return{
				somedata:[],
				id:null
			}
		},
		async asyncData({$axios}){

		  const ip = await $axios.$get('https://jsonplaceholder.typicode.com/users')
		   return {somedata:ip}
		},
		computed:{
			
			xx(){
				var a =this.id
				var b= this.somedata.filter(function(x){
						return x.id==a
				})
				return b[0]
			}
		},
		created(){
			this.id=this.$route.params.id
			console.log(this.id)

		}
	}
</script>