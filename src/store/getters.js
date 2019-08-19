var getters={
	count1(state){
		
		return state.count+'  hello'
	},
	name(state){
		return '欢迎：'+state.username
	}
}

export default getters;