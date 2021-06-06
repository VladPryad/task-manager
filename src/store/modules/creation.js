export default {
    state: {
        fields: {
            username: "",
            email: "",
            text: "",
            status: ""
        },
        message: ""
    },
    getters: {
        getFields(state) {
            return state.fields;
        },
        getMessage(state) {
            return state.message;
        }
    },
    mutations: {
        setUsername(state, username) {
            state.fields.username = username;
        },
        setEmail(state, email) {
            state.fields.email = email;
        },
        setText(state, text) {
            state.fields.text = text;
        },
        setStatus(state, status) {
            state.fields.status = status;
        },
        setMessage(state, message) {
            state.message = message;
        }
    }
}