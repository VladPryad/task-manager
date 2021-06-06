import { signIn } from "../../query/post/signIn";

export default {
    state: {
        loggedIn: false,
        username: "",
        password: "",
        message: ""
    },
    getters: {
       isLoggedIn(state) {
           return state.loggedIn;
       },
       getToken(state) {
           return localStorage.getItem('appToken');
       },
       getPassword(state) {
        return state.password;
        }, 
        getAdminUsername(state) {
            return state.username;
        },
        getAdminMessage(state) {
            return state.message;
        }
    },
    mutations: {
       setLoginInfo(state, { loggedIn, token }) {
           state.loggedIn = loggedIn;
           localStorage.setItem("appToken", token);
       },
       setAdminUsername(state, username) {
           state.username = username;
       },
       setPassword(state, password) {
           state.password = password;
       },
       setAdminMessage(state, message) {
           state.message = message;
       },
       initToken(state) {
           let appToken = localStorage.getItem('appToken');
           if(appToken) {
               state.loggedIn = true;
           }
       }
    },
    actions: {
        async signIn(context, params) {
            let res = await signIn(params);

            if(res.data.status != "ok") {
                console.log(res.data.message);
                context.commit('setAdminMessage', res.data.message);
                return;
            }
            context.commit('setLoginInfo', {loggedIn: true, token: res.data.message.token})
        } 
    }
}