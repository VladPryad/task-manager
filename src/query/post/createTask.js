import query from '@/query/parameterizedQuery';
import config from "@/config"

export const createTask = async (fields = {}) => {

    let { username, email, text } = fields;
    let response = query("post", {}, {
        username,
        email,
        text
    }, config.POST_PATH);

    return response;
}