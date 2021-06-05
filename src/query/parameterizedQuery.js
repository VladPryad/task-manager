import axios from 'axios';
import config from "@/config";

export default async ( method, params, data, path, headers = {} ) => {

    var form_data = new FormData();

    for ( var key in data ) {
        form_data.append(key, data[key]);
    }

    const options = {
        method,
        url: config.API_URI + path,
        data: form_data,
        params: {
            ...params,
            developer: config.DEVELOPER
        },
        headers: {
            ...headers,
            "Content-Type": "multipart/form-data"
        }
    };

    let response = axios(options);
    
    return response;
}