import router from '../router'

var mutations={
	add(state){
		state.count++
	},
	jian(state){
		state.count--
	},
	login(state,username){
		state.username=username
		router.push('/index')
	}
}
export default mutations;