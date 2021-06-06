export default {
    state: {
        editedFields: {
            editedText: "",
            editedStatus: ""
        }
    },
    getters: {
        getEditedFields(state) {
            return state.editedFields;
        }
    },
    mutations: {
        setEditedText(state, text) {
            state.editedFields.editedText = text;
        },
        setEditedStatus(state, status) {
            state.editedFields.editedStatus = status;
        }
    }
}