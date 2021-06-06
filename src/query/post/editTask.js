import query from '@/query/parameterizedQuery';
import config from "@/config"

export const editTask = async (fields = {}) => {

    let { text, status, token, id } = fields;
    let response = query("post", {}, {
        text,
        status,
        token
    }, config.EDIT_PATH + `${id}/`);

    return response;
}