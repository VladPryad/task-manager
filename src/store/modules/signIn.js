
export default {
    state: {
        signInWindowVisible: false
    },
    getters: {
        isSignInWindowVisible(state) {
            return state.signInWindowVisible;
        }
    },
    mutations: {
       setSignInWindowVisible(state, isVisible) {
           state.signInWindowVisible = isVisible;
       }
    },
    actions: {
        
    }
}