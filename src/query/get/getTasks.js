import query from '@/query/parameterizedQuery';
import config from '@/config'

export const getTasks = async (params = {}) => {
    let response = query("get", params, {}, config.GET_PATH);
    
    return response;
}