export default {
    state: {
        username: "",
        email: "",
        text: "",
        status: ""
    },
    getters: {
        getFields(state) {
            return state;
        }
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        setEmail(state, email) {
            state.email = email;
        },
        setText(state, text) {
            state.text = text;
        },
        setStatus(state, status) {
            state.status = status;
        }
    }
}