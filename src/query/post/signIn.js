import query from '@/query/parameterizedQuery';
import config from "@/config"

export const signIn = async (fields = {}) => {

    let { username, password } = fields;
    let response = query("post", {}, {
        username,
        password
    }, config.LOGIN_PATH);

    return response;
}