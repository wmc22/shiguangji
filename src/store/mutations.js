import router from '../router'

var mutations={
	login(state, name) {
		state.name = name;
		// router.push("/main");
	  },
	  yanzheng(state, yanzheng) {
		state.yanzheng = yanzheng;
	  }
}
export default mutations;