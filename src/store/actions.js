var actions={
	jian({commit}){
		setTimeout(function(){
			commit('jian')
		},2000)
	},
	login({commit},username){
		setTimeout(function(){
			commit('login',username)
		},1000)
	}
}

export default actions;
