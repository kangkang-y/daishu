export default{
	data(){
		return{
			list:[]
		}
	},
	mounted(){
		let _this=this;
		this.$axios.get('http://47.93.99.158:3000/mock/108/222/path').then(function(res){
		_this.list=res.data	
		console.log(res.data)
		}).catch(function(error){
			console.log(error)
		})
	}
}
